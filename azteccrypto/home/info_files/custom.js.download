(function($) {
    "use strict"; 
    $(document).ready(function(){   
        if(!$('body').hasClass('elementor-editor-active')) {
            var icon = 'disable';
            var image = 'disable';
            var tags_parsed = tmpointer_vars.highlightelement;
            if (tmpointer_vars.cursorstyle === 'tm-pointer-icon') {
                icon = tmpointer_vars.iconclass;
            }
            if (tmpointer_vars.cursorstyle === 'tm-pointer-img') {
                image = tmpointer_vars.image;
            }
            if (tags_parsed === 'enable') {
                var tags = JSON.parse(tmpointer_vars.highlight);
                tags_parsed = tags.map(item => item.value);
            }
            $('body').tmpointer({
                id: 1,
                icon: icon,
                image: image,
                click_anim: tmpointer_vars.clickanim,
                cursor: tmpointer_vars.cursor,
                cursor_class: 'tm-cursor ' + tmpointer_vars.cursorstyle,
                node: tmpointer_vars.node,
                node_class: 'tm-node ' + tmpointer_vars.cursorstyle,
                cursor_velocity: tmpointer_vars.cursorvelocity,
                node_velocity: tmpointer_vars.nodevelocity,
                native_cursor: tmpointer_vars.native,
                hide_mode: tmpointer_vars.hidemode,
                hide_timing: parseInt(tmpointer_vars.hidetiming),
                elements_to_hover: tags_parsed
            });
            $('#tm-cursor-1').show();
            $('#tm-node-1').show();
        }
    });
})(jQuery);