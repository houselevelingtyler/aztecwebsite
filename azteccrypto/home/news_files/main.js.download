
"use strict";

(function ($, w) {

	var $window = $(w);
	$(function () {
		function log(event, item, level) {
			$(document).on(event, item, level);
		}
	}),


	$window.on("elementor/frontend/init", function (){

		var SliderBase = elementorModules.frontend.handlers.Base.extend({

			onInit: function onInit() {
				elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments);
				this.run();
			},
			getDefaultSettings: function getDefaultSettings() {
			return {
				selectors: {
				container: ".bwdads-mySwiper"
				}
			};
			},
			getDefaultElements: function getDefaultElements() {
			var selectors = this.getSettings("selectors");
			return {
				$container: this.$element.find(selectors.container)
			};
			},
			getReadySettings: function getReadySettings(){

	
				var settings = {
					loop: !!(this.getElementSettings("bwdads_loop_switcher") || false),
					slideShadows: !!(this.getElementSettings("bwdads_coverflow_shadow_switcher") || false),
					effect: this.getElementSettings("bwdads_slider_effects"),
					sliderType: this.getElementSettings("bwdads_slider_type"),
					direction: this.getElementSettings("bwdads_slider_direction"),
					mousewheel: (this.getElementSettings("bwdads_mousewheel") || false),
					speed: this.getElementSettings("bwdads_slide_speed"),
					spaceBetween: parseInt(this.getElementSettings("bwdads_desk_Space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdads_tablet_space")) || 0,
					spaceBetween: parseInt(this.getElementSettings("bwdads_mobile_space")) || 0,
				};
	
				if (this.getElementSettings("bwdads_autoslide_switcher") == "yes") {
					settings.autoplay = {
					delay: this.getElementSettings("bwdads_slider_autoplay_speed"),
					disableOnInteraction: false,
					stopOnLastSlide: !(this.getElementSettings("bwdads_loop_switcher") || false)
					};
				};

				if (this.getElementSettings("bwdads_arrow_switcher") == "yes") {
					var selectorNext = this.elements.$container.find(".bwdads-swiper-next");
					var selectorPrev = this.elements.$container.find(".bwdads-swiper-prev");
					settings.navigation = {
					  nextEl: selectorNext[0],
					  prevEl: selectorPrev[0]
					};
				};

				if (this.getElementSettings("bwdads_slider_effects") == "coverflow") {
					settings.coverflowEffect = {
						rotate: parseInt(this.getElementSettings("bwdads_coverflow_rotate")),
						stretch: 0,
						depth: parseInt(this.getElementSettings("bwdads_coverflow_depth")),
						modifier: parseInt(this.getElementSettings("bwdads_coverflow_modifier")),
						slideShadows: (this.getElementSettings("bwdads_coverflow_shadow_switcher") || false),
					};
				};

				if (this.getElementSettings("bwdads_slider_effects") == "cube"){
					settings.cubeEffect = {
						shadow: (this.getElementSettings("bwdads_cube_shadow_switcher") || false),
						slideShadows: (this.getElementSettings("bwdads_cube_slide_shadow_switcher") || false),
						shadowOffset: parseInt(this.getElementSettings("bwdads_cube_shadow_offset")),
						shadowScale: 0.94,
					};
				};

				if (this.getElementSettings("bwdads_slider_effects") == "creative"){
					settings.creativeEffect = {
						prev: {
							shadow: true,
							translate: [0, 0, -600],
						},
						next: {
							translate: ["100%", 0, 0],
						},
					};
				};

				if (this.getElementSettings("bwdads_popover_responsive_device") == "yes"){
					settings.breakpoints = {
						0: {
							slidesPerView:  parseInt(this.getElementSettings("bwdads_slide_mobile_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdads_mobile_space")) || 0,
						},
						768: {
							slidesPerView: parseInt(this.getElementSettings("bwdads_slide_tablet_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdads_tablet_space")) || 0,
						},
						1025: {
							slidesPerView: parseInt(this.getElementSettings("bwdads_slide_desktop_view")),
							spaceBetween: parseInt(this.getElementSettings("bwdads_desk_Space")) || 0,
						}
					};
				};

				if (this.getElementSettings("bwdads_scroll_bar") == "yes") {
					var selectorScroll = this.elements.$container.find(".bwdads-swiper-scrollbar");
					settings.scrollbar = {
					  el: selectorScroll[0],
					  hide: this.getElementSettings("bwdads_scroll_visibility") == "true",
					  draggable: true
					};
				};

				if (this.getElementSettings("bwdads_slide_pagination") == "yes") {
					var pagination_type = this.getElementSettings("bwdads_pagination_type");

					if ( pagination_type == "bullets" || pagination_type == "progressbar" || pagination_type == "fraction" ){
						var selectorPagi = this.elements.$container.find(".bwdads-swiper-pagination");
						settings.pagination = {
							el: selectorPagi[0],
							clickable: true,
							type: this.getElementSettings("bwdads_pagination_type"),
						};
					}
					else if(pagination_type == "numbers"){
						var selectorPagi = this.elements.$container.find(".bwdads-swiper-pagination");
						settings.pagination = {
							el: selectorPagi[0],
							clickable: true,
							type: "bullets",
							renderBullet: function renderBullet(index, className) {
							return '<span class="' + className + '">' + (index + 1) + "</span>";
							},
						}
	
					};
				};

	
			return $.extend({}, settings);
			},
			run: function run() {
				var elContainer = this.elements.$container;
				var slider = elContainer.find(".bwdads-mySwiper");
				var readySettings = this.getReadySettings();
				var sliderObj = new XaSwiper(slider[0], readySettings);


				sliderObj.on("slideChange", function () {
		  
					var aI = sliderObj.activeIndex;
					var elSlide = elContainer.find(".bwdads-swiper-slide");
					var elSlideContent = elContainer.find(".bwdads-slide-content");
					var currentSlide = elSlideContent.eq(aI);
					currentSlide.hide();
		  
					if (currentSlide.length <= 0) {}
		  
					setTimeout(function () {
					  currentSlide.show();
					}, readySettings.speed);
					elSlide.eq(aI).find(".elementor-invisible, .animated").each(function (e, t) {
					  var i = $(this).data("settings");
		  
					  if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass("elementor-invisible");
						$(this).addClass(a + " animated");
					  }
					});
				});
				sliderObj.on("transitionEnd", function () {
				var aI = sliderObj.activeIndex;
				var elSlide = elContainer.find(".bwdads-swiper-slide");
				var elSlideContent = elContainer.find(".bwdads-slide-content");
				var currentSlide = elSlideContent.eq(aI);
				setTimeout(function () {
					elSlide.eq(aI).find(".animated").each(function (e, t) {
					var i = $(this).data("settings");
		
					if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass(a);
					}
					});
				}, readySettings.speed);
				});


				sliderObj.on("slideChange", function () {
		  
					var aI = sliderObj.activeIndex;
					var elSlide = elContainer.find(".bwdads-swiper-slide");
					var elSlideContent = elContainer.find(".bwdads-slide-img");
					var currentSlide = elSlideContent.eq(aI);
					currentSlide.hide();
		  
					if (currentSlide.length <= 0) {}
		  
					setTimeout(function () {
					  currentSlide.show();
					}, readySettings.speed);
					elSlide.eq(aI).find(".elementor-invisible, .animated").each(function (e, t) {
					  var i = $(this).data("settings");
		  
					  if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass("elementor-invisible");
						$(this).addClass(a + " animated");
					  }
					});
				});
				sliderObj.on("transitionEnd", function () {
				var aI = sliderObj.activeIndex;
				var elSlide = elContainer.find(".bwdads-swiper-slide");
				var elSlideContent = elContainer.find(".bwdads-slide-img");
				var currentSlide = elSlideContent.eq(aI);
				setTimeout(function () {
					elSlide.eq(aI).find(".animated").each(function (e, t) {
					var i = $(this).data("settings");
		
					if (i && (i._animation || i.animation)) {
						var n = i._animation_delay ? i._animation_delay : 0,
							a = i._animation || i.animation;
						$(this).removeClass(a);
					}
					});
				}, readySettings.speed);
				});
	
			}
		});
	
	
	
		elementorFrontend.hooks.addAction("frontend/element_ready/bwdads-swiperslider.default", function ($scope) {
			elementorFrontend.elementsHandler.addHandler(SliderBase, {
			$element: $scope,
			selectors: {
				container: ".bwd-slider-widget-wrapper"
			}
			});
		});
	});


})(jQuery, window);