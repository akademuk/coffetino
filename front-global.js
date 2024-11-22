// Anchor scroll
jQuery(document).ready(function() {
    jQuery('a[href^="#"]').on('click', function(event) {
        event.preventDefault();

        var target = this.hash;
        var jQuerytarget = jQuery(target);

        jQuery('html, body').animate({
            scrollTop: jQuerytarget.offset().top
        }, 800, 'swing');
    });
});
