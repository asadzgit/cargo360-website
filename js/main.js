(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    

    // WhatsApp Floating Button Component
    // Change the phone number here - it will update on all pages
    const whatsappConfig = {
        phoneNumber: '923337766609', // Update this number to change it everywhere
        message: '' // Optional: Pre-filled message
    };

    // Pages where WhatsApp button should appear
    const allowedPages = [
        'index.html',
        'about.html',
        'service.html',
        'contact.html',
        '404.html'
    ];

    function createWhatsAppButton() {
        // Get current page filename
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        // Only create button on allowed pages
        if (!allowedPages.includes(currentPage)) {
            return;
        }

        // Check if button already exists to avoid duplicates
        if ($('.whatsapp-float').length > 0) {
            return;
        }

        const whatsappUrl = whatsappConfig.message 
            ? `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(whatsappConfig.message)}`
            : `https://wa.me/${whatsappConfig.phoneNumber}`;

        const whatsappButton = $('<a>', {
            href: whatsappUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'whatsapp-float',
            'aria-label': 'Contact us on WhatsApp',
            html: '<i class="fab fa-whatsapp"></i>'
        });

        $('body').append(whatsappButton);
    }

    // Initialize WhatsApp button when DOM is ready
    createWhatsAppButton();
    
})(jQuery);

