var $portfolio;
var $masonry_block;
var $portfolio_selectors;
var $blog;

$(document).ready(function (jQuery) {
    // Show Animated Counters
    animatecounters();
    /*==============================================================*/
    //Smooth Scroll - START CODE
    /*==============================================================*/
    jQuery('.inner-top').smoothScroll({
        speed: 900,
        offset: -68
    });
    /*==============================================================*/
    //Smooth Scroll - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    SetResizeHeaderMenu();
    /*==============================================================*/
    //Set Resize Header Menu - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search Button Toggle - START CODE
    /*==============================================================*/
    jQuery(".search-button", "#top-search").on("click", function () {
        //jQuery(".search-form").toggleClass("search-form-show", 0);
    });
    jQuery(".close-search", "#top-search").on("click", function () {
        jQuery(".search-form").toggleClass("search-form-show", 0);
    });
    /*==============================================================*/
    //Search Button Toggle - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //For shopping cart- START CODE
    /*==============================================================*/
    var isMobile = false;
    var isiPhoneiPad = false;
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }
    if (!isMobile) {
        jQuery(".top-cart a.shopping-cart, .cart-content").hover(function () {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');
        }, function () {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        });
    }
    if (isiPhoneiPad) {
        jQuery(".video-wrapper").css('display', 'none');
    }
    
    jQuery(".top-cart a.shopping-cart").click(function () {
        //jQuery('.navbar-collapse').collapse('hide');

        if (jQuery('.cart-content').css('visibility') == 'visible') {
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        }
        else {
            jQuery(".cart-content").css('opacity', '1');
            jQuery(".cart-content").css('visibility', 'visible');
            jQuery(".search-form").css('opacity', '0');
            jQuery(".search-form").css('visibility', 'hidden');
        }
    });
    jQuery("#top-search i.search-button, #top-search .subtitle").click(function () {
        //jQuery('.navbar-collapse').collapse('hide');

        if (jQuery('.search-form').css('visibility') == 'visible') {
            jQuery(".search-form").css('opacity', '0');
            jQuery(".search-form").css('visibility', 'hidden');
        }
        else {
            jQuery(".search-form").css('opacity', '1');
            jQuery(".search-form").css('visibility', 'visible');
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
        }
    });
    if (!isMobile) {
        jQuery("#top-search, .search-form").hover(function () {
            jQuery(".search-form").css('opacity', '1');
            jQuery(".search-form").css('visibility', 'visible');
        }, function () {
            jQuery(".search-form").css('opacity', '0');
            jQuery(".search-form").css('visibility', 'hidden');
        });
    }
    /*==============================================================*/
    //For shopping cart - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //For shopping cart - START CODE
    /*==============================================================*/
    jQuery(window).scroll(function () {
        if (jQuery('.search-form').hasClass("search-form-show")) {

            jQuery('.close-search').click();
        }
    });
    /*==============================================================*/
    //Shrink nav on scroll - START CODE
    /*==============================================================*/

    if ($(window).scrollTop() > 10) {
        jQuery('nav').addClass('shrink-nav');
    } else {
        jQuery('nav').removeClass('shrink-nav');
    }
    /*==============================================================*/
    //Shrink nav on scroll - END CODE
    /*==============================================================*/


    /*==============================================================*/
    //Portfolio - START CODE
    /*==============================================================*/
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".porfilio-item").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".porfilio-item").hasClass("hover")) {
                $(this).closest(".porfilio-item").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".porfilio-item").mouseenter(function () {
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function () {
            $(this).removeClass("hover");
        });
    }

    // use for portfolio sotring with masonry

    $portfolio = jQuery('.masonry-items');
    $portfolio.imagesLoaded(function () {
        $portfolio.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });

    // use for simple masonry ( for example home-photography.html page )

    $masonry_block = jQuery('.masonry-block-items');
    $masonry_block.imagesLoaded(function () {
        $masonry_block.isotope({
            itemSelector: 'li',
            layoutMode: 'masonry'
        });
    });

    $portfolio_selectors = jQuery('.portfolio-filter > li > a');
    $portfolio_selectors.on('click', function () {
        $portfolio_selectors.parent().removeClass('active');
        $(this).parent().addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
        return false;
    });
    $blog = jQuery('.blog-masonry');
    $blog.imagesLoaded(function () {

        //ISOTOPE FUNCTION - FILTER PORTFOLIO FUNCTION
        $blog.isotope({
            itemSelector: '.blog-listing',
            layoutMode: 'masonry'
        });
    });
    $(window).resize(function () {
        setTimeout(function () {
            $portfolio.isotope('layout');
            $blog.isotope('layout');
            $masonry_block.isotope('layout');
        }, 500);
    });
    /*==============================================================*/
    //Portfolio - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Parallax - START CODE
    /*==============================================================*/
    SetParallax();
    /*==============================================================*/
    //Set Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Sliders owlCarousel - START CODE
    /*==============================================================*/
    

    jQuery("#owl-demo").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-small").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-products").owlCarousel({
        navigation: true, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-background").owlCarousel({
        transitionStyle: "fade",
        autoPlay: 3000,
        slideSpeed: 100,
        singleItem: true,
        navigation: false,
        pagination: false,
        touchDrag: false,
        mouseDrag: false
    });
    jQuery("#blog-slider-grid").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#blog-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 2],
        itemsMobile: [700, 1]
    });
    jQuery("#approach-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    jQuery("#testimonial-slider").owlCarousel({
        navigation: false,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1]
    });
    jQuery("#shop-products").owlCarousel({
        navigation: true,
        items: 3,
        itemsDesktop: [1200, 3],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    jQuery("#owl-demo-brand").owlCarousel({
        navigation: true,
        items: 4,
        itemsDesktop: [1200, 4],
        itemsTablet: [800, 3],
        itemsMobile: [700, 1],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    /*==============================================================*/
    //Sliders owlCarousel - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //PieChart For Onepage - START CODE
    /*==============================================================*/

    jQuery('.chart').easyPieChart({
        barColor: '#fff',
        trackColor: '#535353',
        scaleColor: false,
        easing: 'easeOutBounce',
        scaleLength: 1,
        lineCap: 'round',
        lineWidth: 1, //12
        size: 120, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    jQuery('.chart2').easyPieChart({
        easing: 'easeOutCirc',
        barColor: '#767676',
        trackColor: '#c7c7c7',
        scaleColor: false,
        easing: 'easeOutBounce',
        scaleLength: 1,
        lineCap: 'round',
        lineWidth: 2, //12
        size: 120, //110
        animate: {
            duration: 2000,
            enabled: true
        },
        onStep: function (from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    /*==============================================================*/
    //PieChart For Onepage - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - START CODE
    /*==============================================================*/

    $(".owl-pagination > .owl-page").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    $(".owl-buttons > .owl-prev").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });
    $(".owl-buttons > .owl-next").click(function (e) {
        if ($(e.target).is('.mfp-close'))
            return;
        return false;
    });    
    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Revolution Slider  - START CODE
    /*==============================================================*/

    jQuery('.revolution-agency-intro').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-agency-intro2').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-product-intro').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-restaurant').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "none",
                navigationStyle: "none",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-slider-half').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            });
    jQuery('.revolution-slider-full').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.photography-revolution-slider-full').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "bullet",
                navigationArrows: "none",
                navigationStyle: "preview5",
                touchenabled: "on",
                onHoverStop: "on",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner0",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-travel').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-intro-travel2').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1920,
                startheight: 980,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header",
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0]
            });
    jQuery('.revolution-intro-fashion').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1900,
                startheight: 977,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview4",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    jQuery('.revolution-masonry-portfolio').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview1",
                touchenabled: "off",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "off",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "on",
                fullScreen: "off",
                spinner: "spinner0",
                stopLoop: "on",
                stopAfterLoops: 1,
                stopAtSlide: 1,
                shuffle: "off",
                autoHeight: "off",
                forceFullWidth: "off",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                parallax: "mouse",
                parallaxBgFreeze: "on",
                parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
            });
    jQuery('.revolution-onepage-restaurant').show().revolution(
            {
                dottedOverlay: "none",
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 200,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 5,
                navigationType: "none",
                navigationArrows: "solo",
                navigationStyle: "preview2",
                touchenabled: "on",
                onHoverStop: "off",
                swipe_velocity: 0.7,
                swipe_min_touches: 1,
                swipe_max_touches: 1,
                drag_block_vertical: false,
                keyboardNavigation: "on",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "on",
                spinner: "spinner1",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                forceFullWidth: "off",
                fullScreenAlignForce: "off",
                minFullScreenHeight: "400",
                hideThumbsOnMobile: "off",
                hideNavDelayOnMobile: 1500,
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResolution: 0,
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                startWithSlide: 0,
                fullScreenOffsetContainer: ".header"
            });
    /*==============================================================*/
    //Revolution Slider  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //WOW Animation  - START CODE
    /*==============================================================*/

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    /*==============================================================*/
    //WOW Animation  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/

    jQuery('.collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    jQuery('.collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    jQuery('.nav.navbar-nav a.inner-link').click(function () {
        $(this).parents('ul.navbar-nav').find('a.inner-link').removeClass('active');
        $(this).addClass('active');
        if (jQuery('.navbar-header .navbar-toggle').is(':visible'))
            $(this).parents('.navbar-collapse').collapse('hide');
    });
    jQuery('.accordion-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.accordion-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    jQuery('.accordion-style3 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.accordion-style3 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //accordion - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/

    jQuery('toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    jQuery('toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    jQuery('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    jQuery('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //toggles  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //fit video  - START CODE
    /*==============================================================*/
    // Target your .container, .wrapper, .post, etc.
    try {
        $(".fit-videos").fitVids();
    }
    catch(err) {
        
    }

    
    /*==============================================================*/
    //fit video  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - START CODE
    /*==============================================================*/
    // you want to enable the pointer events only on click;

    jQuery('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
    jQuery('#canvas1').on('click', function () {
        jQuery('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
    });
    // you want to disable pointer events when the mouse leave the canvas area;

    $("#map_canvas1").mouseleave(function () {
        jQuery('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    });
    /*==============================================================*/
    //google map - mouse scrolling wheel behavior - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search - START CODE
    /*==============================================================*/
    $("input.search-input").bind("keypress", function (event) {
        if (event.which == 13 && !isMobile) {
            $("button.search-button").click();
            event.preventDefault();
        }
    });
    $("form.search-form").submit(function (event) {
        var action = $(this).attr('action');
        action = action == '#' || action == '' ? 'blog-grid-3columns.html' : action;
        action = action + '?' + $(this).serialize();
        window.location = action;
        event.preventDefault();
    });
    jQuery('.navbar .navbar-collapse a.dropdown-toggle, .accordion-style1 .panel-heading a, .accordion-style2 .panel-heading a, .accordion-style3 .panel-heading a, .toggles .panel-heading a, .toggles-style2 .panel-heading a, .toggles-style3 .panel-heading a, a.carousel-control, .nav-tabs a[data-toggle="tab"], a.shopping-cart').click(function (e) {
        e.preventDefault();
    });
    jQuery('body').on('touchstart click', function (e) {
        if ($(window).width() < 992) {
            if (!jQuery('.navbar-collapse').has(e.target).is('.navbar-collapse') && jQuery('.navbar-collapse').hasClass('in') && !$(e.target).hasClass('navbar-toggle')) {
                jQuery('.navbar-collapse').collapse('hide');
            }
        }
        else {
            if (!jQuery('.navbar-collapse').has(e.target).is('.navbar-collapse') && jQuery('.navbar-collapse ul').hasClass('in')) {
                console.log(this);
                jQuery('.navbar-collapse').find('a.dropdown-toggle').addClass('collapsed');
                jQuery('.navbar-collapse').find('ul.dropdown-menu').removeClass('in');
                jQuery('.navbar-collapse a.dropdown-toggle').removeClass('active');
            }
        }
    });
    jQuery('.navbar-collapse a.dropdown-toggle').on('touchstart', function (e) {
        jQuery('.navbar-collapse a.dropdown-toggle').not(this).removeClass('active');
        if ($(this).hasClass('active'))
            $(this).removeClass('active');
        else
            $(this).addClass('active');
    });

   $("button.navbar-toggle").click(function () {
       if (isMobile){
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
            jQuery(".search-form").css('opacity', '0');
            jQuery(".search-form").css('visibility', 'hidden');
        }
    });
    $("a.dropdown-toggle").click(function () {
       if (isMobile){
            jQuery(".cart-content").css('opacity', '0');
            jQuery(".cart-content").css('visibility', 'hidden');
            jQuery(".search-form").css('opacity', '0');
            jQuery(".search-form").css('visibility', 'hidden');
        }
    });

    

    /*==============================================================*/
    //Search - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Parallax - START CODE
    /*==============================================================*/

    var $elem = jQuery('#content');
    jQuery('#scroll_to_top').fadeIn('slow');
    jQuery('#nav_down').fadeIn('slow');
    $(window).bind('scrollstart', function () {
        jQuery('#scroll_to_top,#nav_down').stop().animate({ 'opacity': '0.2' });
    });
    $(window).bind('scrollstop', function () {
        jQuery('#scroll_to_top,#nav_down').stop().animate({ 'opacity': '1' });
    });
    jQuery('#nav_down').click(
            function (e) {
                jQuery('html, body').animate({ scrollTop: $elem.height() }, 800);
            }
    );
    jQuery('#scroll_to_top').click(
            function (e) {
                jQuery('html, body').animate({ scrollTop: '0px' }, 800);
            }
    );
    /*==============================================================*/
    //Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //FORM TO EMAIL - START CODE
    /*==============================================================*/
    $("#success").hide();
    
    $("#contact-us-button").click(function () {
        var error = validationContactUsForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: $("#contactusform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationContactUsForm() {
        var error = true;
        jQuery('#contactusform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#contactusform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }    

    $("#notifyme-button").click(function () {
        var error = validationnotifymeForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "notifyme.php",
                data: $("#notifymeform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })

                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationnotifymeForm() {
        var error = true;
        jQuery('#notifymeform input[type=text]').each(function (index) {

            if (index == 0) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#notifymeform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#notifymeform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            
        });
        return error;
    }       

    $("#success-free30daytrial").hide();
    $("#free30daytrial-button").click(function () {
        var error = validationfree30daytrialForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "free30daytrial.php",
                data: $("#free30daytrialform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success-free30daytrial").html(result);
                    $("#success-free30daytrial").fadeIn("slow");
                    jQuery('#success-free30daytrial').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationfree30daytrialForm() {
        var error = true;
        jQuery('#free30daytrialform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#free30daytrialform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }     


   $("#event-button").click(function () {
        var error = validationeventForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "rsvp.php",
                data: $("#eventform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationeventForm() {
        var error = true;
        jQuery('#eventform input[type=text]').each(function (index) {

            if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#eventform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#eventform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }          

    $("#careers-button").click(function () {
        var error = validationcareersForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: "careers.php",
                data: $("#careersform").serialize(),
                success: function (result) {
                    jQuery('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    jQuery('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationcareersForm() {
        var error = true;
        jQuery('#careersform input[type=text]').each(function (index) {

            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                } else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
             else if (index == 2) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid red" });
                    error = false;
                }
                else {
                    $("#careersform").find("input:eq(" + index + ")").css({ "border": "1px solid #dfdfdf" });
                }
            }
        });
        return error;
    }     
    /*==============================================================*/
    //FORM TO EMAIL - END CODE
    /*==============================================================*/

});

function animatecounters(){
/*==============================================================*/
    //Counter Number - START CODE
    /*==============================================================*/
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 312 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {

            $("#anim-number-pizza").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 980 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#anim-number-client").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 810 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#anim-number-projects").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 600 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#anim-number-comments").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 450 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter1").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 687 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter2").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 835 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter3").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 450 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter4").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 875 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter5").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 458 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter6").text(Math.ceil(this.ValuerHbcO));
        }
    });
    jQuery({ ValuerHbcO: 0 }).delay(0).animate({ ValuerHbcO: 696 },
    {
        duration: 2000,
        easing: "swing",
        step: function () {
            $("#counter7").text(Math.ceil(this.ValuerHbcO));
        }
    });
    /*==============================================================*/
    //Counter Number - END CODE
    /*==============================================================*/
}

var inViewchart = false;
var inViewanimnumberpizza = false;
var inViewanimnumberclient = false;
var inViewanimnumberprojects = false;
var inViewanimnumbercomments = false;
var inViewcounter1 = false;
var inViewcounter2 = false;
var inViewcounter3 = false;
var inViewcounter4 = false;
var inViewcounter5 = false;
var inViewcounter6 = false;
var inViewcounter7 = false;

function isScrolledIntoView(elem)
{
    try {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
        }
        catch (ex) {
            return false;
        }

   
}



/*==============================================================*/
//Navigation - START CODE
/*==============================================================*/
// Shrink nav on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
        jQuery('nav').addClass('shrink-nav');
    } else {
        jQuery('nav').removeClass('shrink-nav');
    }

    //Animate Elements in view position
    if (isScrolledIntoView('.chart')) {
        if (inViewchart==false) 
        {
        inViewchart = true;

        $( ".chart" ).each(function() {
        try {
            $(this).data('easyPieChart').update(0);
            $(this).data('easyPieChart').update($(this).attr("data-percent"));
        }
        catch (ex) {}
        });
        
        $( ".chart2" ).each(function() {
        try {
            $(this).data('easyPieChart').update(0);
            $(this).data('easyPieChart').update($(this).attr("data-percent"));
        }
        catch (ex) {}
        });
         }
    } 
    

    if (isScrolledIntoView('#anim-number-pizza')) {
        if (inViewanimnumberpizza==false){
            inViewanimnumberpizza = true;
         animatecounters();
        }
        
    } 
   
    if (isScrolledIntoView('#anim-number-projects')) {
        if (inViewanimnumberprojects==false){
        inViewanimnumberprojects = true;

         animatecounters();
     }
        
    } 
     
    if (isScrolledIntoView('#anim-number-comments')) {
        if (inViewanimnumbercomments==false){
        inViewanimnumbercomments = true;

         animatecounters();
     }
    } 
    
    if (isScrolledIntoView('#counter1')) {
        if (inViewcounter1==false){
        inViewcounter1 = true;

         animatecounters();
     }
    } 
   
    if (isScrolledIntoView('#counter2')) {
        if (inViewcounter2==false){
        inViewcounter2 = true;

         animatecounters();
     }
    } 
   
    if (isScrolledIntoView('#counter3')) {
        if (inViewcounter3==false){
        inViewcounter3 = true;

         animatecounters();
     }
    } 
   
    if (isScrolledIntoView('#counter4')) {
        if (inViewcounter4==false){
        inViewcounter4 = true;

         animatecounters();
     }
    } 
   
    if (isScrolledIntoView('#counter5')) {
        if (inViewcounter5==false){
        inViewcounter5 = true;
        animatecounters();
    }
    } 
   
    if (isScrolledIntoView('#counter6')) {
        if (inViewcounter6==false){
        inViewcounter6 = true;
         animatecounters();
     }
    } 
    if (isScrolledIntoView('#counter7')) {
        if (inViewcounter7==false){
        inViewcounter7 = true;
        animatecounters();
    }
    } 
     

   
});
// Resize Header Menu
function SetResizeHeaderMenu() {
    var width = jQuery('nav.navbar').children('div.container').width();
    $("ul.mega-menu-full").each(function () {
        jQuery(this).css('width', width + 'px');
    });
}
/*==============================================================*/
//Navigation - END CODE
/*==============================================================*/


/*==============================================================*/
//Parallax - START CODE
/*==============================================================*/
// Parallax Fix Image Scripts

jQuery('.parallax-fix').each(function () {
    if ($(this).children('.parallax-background-img').length) {
        var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
        jQuery(this).css('background', 'url("' + imgSrc + '")');
        jQuery(this).children('.parallax-background-img').remove();
        $(this).css('background-position', '50% 0%');
    }

});
var IsParallaxGenerated = false;
function SetParallax() {
    /*if ($(window).width() > 1030 && !IsParallaxGenerated) {
        jQuery('.parallax1').parallax("50%", 0.1);
        jQuery('.parallax2').parallax("50%", 0.2);
        jQuery('.parallax3').parallax("50%", 0.3);
        jQuery('.parallax4').parallax("50%", 0.4);
        jQuery('.parallax5').parallax("50%", 0.5);
        jQuery('.parallax6').parallax("50%", 0.6);
        jQuery('.parallax7').parallax("50%", 0.7);
        jQuery('.parallax8').parallax("50%", 0.8);
        jQuery('.parallax9').parallax("50%", 0.05);
        jQuery('.parallax10').parallax("50%", 0.02);
        jQuery('.parallax11').parallax("50%", 0.01);
        jQuery('.parallax12').parallax("50%", 0.099);
        IsParallaxGenerated = true;
    }*/
}
/*==============================================================*/
//Parallax - END CODE
/*==============================================================*/

/*==============================================================*/
//Mobile Toggle Control - START CODE
/*==============================================================*/

jQuery('.mobile-toggle').click(function () {
    jQuery('nav').toggleClass('open-nav');
});
jQuery('.dropdown-arrow').click(function () {
    if (jQuery('.mobile-toggle').is(":visible")) {
        if ($(this).children('.dropdown').hasClass('open-nav')) {
            $(this).children('.dropdown').removeClass('open-nav');
        } else {
            jQuery('.dropdown').removeClass('open-nav');
            $(this).children('.dropdown').addClass('open-nav');
        }
    }
});
/*==============================================================*/
//Mobile Toggle Control - END CODE
/*==============================================================*/

/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - START CODE
/*==============================================================*/
jQuery('.dropdown-fullwidth').each(function () {
    $(this).css('width', jQuery('.row').width());
    var subNavOffset = -(jQuery('nav .row').innerWidth() - jQuery('.menu').innerWidth() - 15);
    $(this).css('left', subNavOffset);
});
/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - END CODE
/*==============================================================*/

/*==============================================================*/
//Smooth Scroll - START CODE
/*==============================================================*/
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
jQuery('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    jQuery('html, body').stop()
            .animate({
                'scrollTop': $(target)
                        .offset()
                        .top
            }, scrollAnimationTime, scrollAnimation, function () {
                window.location.hash = target;
            });
});
// Inner links
jQuery('.inner-link').smoothScroll({
    speed: 900,
    offset: -0
});
// Scroll To Down
function scrollToDown() {
    var target = jQuery('#features');
    jQuery('html, body').animate({ scrollTop: $(target).offset().top }, 800);
}
function scrollToDownSection() {
    var target = jQuery('#about');
    jQuery('html, body').animate({ scrollTop: $(target).offset().top }, 800);
}
/*==============================================================*/
//Smooth Scroll - END CODE
/*==============================================================*/

/*==============================================================*/
//Full Screen Header - START CODE
/*==============================================================*/

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);
}

SetResizeContent();
/*==============================================================*/
//Full Screen Header - END CODE
/*==============================================================*/


/*==============================================================*/
//Window Resize Events - START CODE
/*==============================================================*/
$(window).resize(function () {
    //Position Fullwidth Subnavs fullwidth correctly
    jQuery('.dropdown-fullwidth').each(function () {
        $(this).css('width', jQuery('.row').width());
        var subNavOffset = -(jQuery('nav .row').innerWidth() - jQuery('.menu').innerWidth() - 15);
        $(this).css('left', subNavOffset);
    });
    SetResizeContent();
    setTimeout(function () {
        SetResizeHeaderMenu();
    }, 200);
    if ($(window).width() >= 992 && jQuery('.navbar-collapse').hasClass('in')) {
        jQuery('.navbar-collapse').removeClass('in');
        //jQuery('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
        jQuery('.navbar-collapse ul.dropdown-menu').each(function () {
            if ($(this).hasClass('in')) {
                $(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
            }
        });
        jQuery('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
        jQuery('.logo').focus();
        jQuery('.navbar-collapse a.dropdown-toggle').removeClass('active');
    }

    setTimeout(function () {
        SetParallax();
    }, 1000);
});
/*==============================================================*/
//Window Resize Events - END CODE
/*==============================================================*/

/*==============================================================*/
//Countdown Timer - START CODE
/*==============================================================*/
jQuery('#counter-underconstruction').countdown('2015/12/15 12:00:00').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime('' + '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))
});
jQuery('#counter-wedding').countdown('2015/09/20 12:00:00').on('update.countdown', function (event) {
    var $this = $(this).html(event.strftime('' + '<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div>' + '<div class="counter-box"><div class="number">%H</div><span>Hours</span></div>' + '<div class="counter-box"><div class="number">%M</div><span>Minutes</span></div>' + '<div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'))
});
/*==============================================================*/
//Countdown Timer - END CODE
/*==============================================================*/


/*==============================================================*/
//Scroll To Top - START CODE
/*==============================================================*/
$(window).scroll(function () {
    if ($(this)
            .scrollTop() > 100) {
        jQuery('.scrollToTop')
                .fadeIn();
    } else {
        jQuery('.scrollToTop')
                .fadeOut();
    }
});
//Click event to scroll to top
jQuery('.scrollToTop').click(function () {
    jQuery('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
/*==============================================================*/
//Scroll To Top - END CODE
/*==============================================================*/