// jQuery(document).ready(function () {

//   var screenHeight = jQuery(window).height();
//   jQuery("#post-4489").css("height", screenHeight + "px");
//   // Get the target section and calculate its offset from the top of the document
//   var targetSection = jQuery("#post-4489");
//   var sectionOffset = targetSection.offset().top;

//   jQuery(window).scroll(function () {
//     // Calculate the current scroll position
//     var scrollPosition = jQuery(window).scrollTop();

//     // Check if the scroll position reaches the target section
//     if (scrollPosition >= sectionOffset) {
//       // Calculate the current section index based on the scroll position and section height
//       var sectionIndex = Math.floor(
//         (scrollPosition - sectionOffset) / jQuery(window).height()
//       );

//       // Calculate the scroll position within the target section
//       var sectionScrollPosition =
//         (scrollPosition - sectionOffset) % jQuery(window).height();

//       // Update the scroll position of the target section
//       targetSection.scrollTop(sectionScrollPosition);

//       // Show the image corresponding to the current section index
//       targetSection.find(".image-scroll-container img").eq(sectionIndex).show();
//     }
//   });
// });



jQuery(document).ready(function() {
    var images = jQuery(".image-scroll-item");
    var container = jQuery(".image-scroll-container");

    if (container.length === 0) {
        console.error("Container element not found.");
        return;
    }

    if (images.length === 0) {
        console.error("Image elements not found.");
        return;
    }

    var containerHeight = container.height();
    var activeIndex = 0;
    var previousScroll = 0;

    images.eq(activeIndex).addClass("active");

    container.scroll(function() {
        var scrollPosition = container.scrollTop();
        var scrollDirection = scrollPosition > previousScroll ? "down" : "up";
        previousScroll = scrollPosition;
        var imageIndex = Math.floor(scrollPosition / containerHeight);

        if (scrollDirection === "down" && imageIndex > activeIndex) {
            images.eq(activeIndex).removeClass("active");
            activeIndex = imageIndex;
            images.eq(activeIndex).addClass("active");
        } else if (scrollDirection === "up" && imageIndex < activeIndex) {
            images.eq(activeIndex).removeClass("active");
            activeIndex = imageIndex;
            images.eq(activeIndex).addClass("active");
        }

        container.scrollTop(activeIndex * containerHeight);
    });
});