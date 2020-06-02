$(document).ready(function() {

    $('.main-welcome-link a, .main-conf-reg a, .faq-menu a').click(function(e) {
        var curBlock = $($(this).attr('href'));
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
        }
        e.preventDefault();
    });

    $('.page-link').click(function(e) {
        var curBlock = $(this.hash);
        if (curBlock.length == 1) {
            $('html, body').animate({'scrollTop': curBlock.offset().top});
            e.preventDefault();
        }
    });

    $('.main-news-list').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: 'unslick'
            }
        ]
    });

    $('.main-reviews-list-inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.main-slider').each(function() {
        var curSlider = $(this);
        var curID = 0;
        curSlider.find('.main-slider-item').each(function() {
            var curItem = $(this);
            curItem.html('<svg width="738" height="802" viewBox="0 0 738 802" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<mask id="mask' + curID + '" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="907" height="1000">' +
                                '<path class="main-slider-hexagon-1" d="M236.474 290.592L299.838 400.34L236.474 510.088L109.748 510.088L46.385 400.34L109.748 290.592L236.474 290.592Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-2" d="M432.68 177.397L496.043 287.145L432.68 396.893L305.954 396.893L242.591 287.145L305.954 177.397L432.68 177.397Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-3" d="M431.842 405.465L495.205 515.213L431.842 624.961L305.115 624.961L241.752 515.213L305.115 405.465L431.842 405.465Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-4" d="M628.046 63.3631L691.41 173.111L628.046 282.859L501.32 282.859L437.957 173.111L501.32 63.3631L628.046 63.3631Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-5" d="M628.047 291.431L691.41 401.179L628.047 510.927L501.32 510.927L437.957 401.179L501.32 291.431L628.047 291.431Z" fill="#C4C4C4"/>' +
                                '<path class="main-slider-hexagon-6" d="M628.047 519.499L691.41 629.247L628.047 738.995L501.32 738.995L437.957 629.247L501.32 519.499L628.047 519.499Z" fill="#C4C4C4"/>' +
                            '</mask>' +
                            '<g mask="url(#mask' + curID + ')">' +
                                '<image id="image' + curID + '" width="612" height="577" x="15" y="180" xlink:href="' + curItem.attr('data-image') + '"/>' +
                            '</g>' +
                        '</svg>');
            curID++;
        });
        curSlider.find('.main-slider-item').eq(0).addClass('active');

        window.setInterval(function() {
            var curIndex = curSlider.find('.main-slider-item').index(curSlider.find('.main-slider-item.active'));
            curIndex++;
            if (curIndex > curSlider.find('.main-slider-item').length - 1) {
                curIndex = 0;
            }
            curSlider.find('.main-slider-item.active').removeClass('active');
            curSlider.find('.main-slider-item').eq(curIndex).addClass('active');
        }, 5000);
    });

    $('body').on('click', '.partcipant-prefs-menu-item a', function(e) {
        var curLi = $(this).parent();
        var curBlock = curLi.parents().filter('.partcipant-prefs');
        if (!curLi.hasClass('active')) {
            curBlock.find('.partcipant-prefs-menu-item.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = curBlock.find('.partcipant-prefs-menu-item').index(curLi);
            curBlock.find('.partcipant-prefs-content.active').removeClass('active');
            curBlock.find('.partcipant-prefs-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('click', '.video-detail-link', function(e) {
        $('.video-detail-player').html('');
        $(this).parent().addClass('start');
        $(this).parent().find('.video-detail-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        e.preventDefault();
    });

    $('body').on('click', '.catalogue-filter-group-header', function(e) {
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', '.catalogue-filter-group-all a', function(e) {
        $(this).parent().parent().toggleClass('all');
        e.preventDefault();
    });

    $('body').on('change', '.catalogue-view input', function(e) {
        $('.catalogue-list').stop(true, true).animate({'opacity': 0}, 150, 'easeInQuad', function() {
            if ($('#catalogue-view-rows').prop('checked')) {
                $('.catalogue-list').addClass('catalogue-list-rows');
                $('.catalogue-rows-header').addClass('visible');
            } else {
                $('.catalogue-list').removeClass('catalogue-list-rows');
                $('.catalogue-rows-header').removeClass('visible');
            }
            $('.catalogue-list').css({'top': 20}).animate({'opacity': 1, 'top': 0}, 250, 'easeInQuad');
        });
    });

    $('.catalogue-view input').each(function(e) {
        $('.catalogue-list').stop(true, true).animate({'opacity': 0}, 150, 'easeInQuad', function() {
            if ($('#catalogue-view-rows').prop('checked')) {
                $('.catalogue-list').addClass('catalogue-list-rows');
                $('.catalogue-rows-header').addClass('visible');
            } else {
                $('.catalogue-list').removeClass('catalogue-list-rows');
                $('.catalogue-rows-header').removeClass('visible');
            }
            $('.catalogue-list').css({'top': 20}).animate({'opacity': 1, 'top': 0}, 250, 'easeInQuad');
        });
    });

    $('body').on('click', '.catalogue-filter-item-parent-label-inner', function(e) {
        $(this).parent().parent().parent().toggleClass('open');
    });

    $('body').on('change', '.catalogue-filter-item-parent input', function(e) {
        if ($(this).prop('checked')) {
            var curBlock = $(this).parents().filter('.catalogue-filter-item');
            curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').prop('checked', true);
        } else {
            var curBlock = $(this).parents().filter('.catalogue-filter-item');
            curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').prop('checked', false);
        }
    });

    $('body').on('change', '.catalogue-filter-item-sub .catalogue-filter-item input', function(e) {
        var curBlock = $(this).parent().parent().parent().parent().parent();
        if (curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input:checked').length == curBlock.find('.catalogue-filter-item-sub .catalogue-filter-item input').length) {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', true);
        } else {
            curBlock.find('.catalogue-filter-item-parent input').prop('checked', false);
        }
    });

    $('body').on('change', '.catalogue-filter-container input[type="checkbox"]', function(e) {
        $('.catalogue-list').addClass('loading');
        var curForm = $('.catalogue-filter-container form');
        var formData = new FormData(curForm[0]);

        $.ajax({
            type: 'POST',
            url: $(curForm).attr('action'),
            processData: false,
            contentType: false,
            dataType: 'html',
            data: formData,
            cache: false
        }).done(function(html) {
            html = '<div>' + html + '</div>';
            $('.catalogue-list').html($(html).find('.catalogue-list').html());
            $('.catalogue-count strong').eq(0).html($(html).find('.catalogue-list').attr('count_filter'));
            $('.pager').html($(html).find('.pager').html());
            $('.catalogue-list').removeClass('loading');
        });
    });

    $('body').on('click', '.window-catalogue-descr-more a', function(e) {
        $('.window-catalogue-descr').toggleClass('open');
        e.preventDefault();
    });

    $('.omni-link').click(function(e) {
        $('.omni').toggleClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.omni').length == 0) {
            $('.omni').removeClass('open');
        }
    });

    $('body').on('click', '.main-partners-item > a', function(e) {
        if ($(window).width() < 1170) {
            var curBlock = $(this).parent();
            if (curBlock.find('.main-partners-item-window').length > 0) {
                if (curBlock.hasClass('open')) {
                    curBlock.removeClass('open');
                } else {
                    $('.main-partners-item.open').removeClass('open');
                    curBlock.addClass('open');
                }
                e.preventDefault();
            }
        }
    });

    $('body').on('click', '.main-partners-item-window-close', function(e) {
        $('.main-partners-item.open').removeClass('open');
        e.preventDefault();
    });

    $(document).click(function(e) {
        if ($(e.target).parents().filter('.main-partners-item').length == 0) {
            $('.main-partners-item.open').removeClass('open');
        }
    });

    $.extend(true, $.magnificPopup.defaults, {
        tClose: 'Закрыть (Esc)',
        tLoading: 'Загрузка...',
        gallery: {
            tPrev: 'Предыдущая',
            tNext: 'Следующая',
            tCounter: '%curr% из %total%'
        },
        image: {
            tError: '<a href="%url%">Изображение</a> не может быть загружено.'
        },
        ajax: {
            tError: '<a href="%url%">Контент</a> не может быть загружен.'
        }
    });

    $('.archive-gallery').each(function() {
        $(this).find('.archive-gallery-item-inner a').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    $('body').on('click', '.faq-item-title a', function(e) {
        var curItem = $(this).parent().parent();
        curItem.toggleClass('open');
        curItem.find('.faq-item-answer').stop(true, true).slideToggle();
        e.preventDefault();
    });

    $('body').on('click', '.main-days-menu-inner a', function(e) {
        var curLink = $(this);
        if (!curLink.hasClass('active')) {
            $('.main-days-video-player').html('');
            $('.main-days-video').removeClass('start');

            $('.main-days-menu-inner a.active').removeClass('active');
            curLink.addClass('active');
            var curIndex = $('.main-days-menu-inner a').index(curLink);
            $('.main-days-content.active').removeClass('active');
            $('.main-days-content').eq(curIndex).addClass('active');
        }
        e.preventDefault();
    });

    $('body').on('click', '.main-days-video-link', function(e) {
        $('.main-days-video-player').html('');
        $(this).parent().addClass('start');
        $(this).parent().find('.main-days-video-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '?rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        e.preventDefault();
    });

    $('body').on('click', '.main-days-schedule-time a', function(e) {
        $('.main-days-video-player').html('');
        var curBlockVideo = $(this).parents().filter('.main-days-content').find('.main-days-video');
        curBlockVideo.addClass('start');
        curBlockVideo.find('.main-days-video-player').html('<iframe width="560" height="315" src="' + $(this).attr('href') + '&rel=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        e.preventDefault();
    });

    $('body').on('click', '.main-schedule-list-more a', function(e) {
        $('.main-schedule-list').toggleClass('open');
        e.preventDefault();
    });

});

$(window).on('load resize', function() {
    $('.partcipant-prefs-menu').each(function() {
        if ($(window).width() < 1170) {
            $(this).mCustomScrollbar({
                axis: 'x',
                scrollButtons: {
                    enable: true
                }
            });
        } else {
            $(this).mCustomScrollbar('destroy');
        }
    });

    $('.window-catalogue-descr-wrap').each(function() {
        var curBlock = $(this);
        curBlock.removeClass('open');
        if (curBlock.height() < curBlock.find('.window-catalogue-descr-inner').height()) {
            curBlock.addClass('with-more');
        } else {
            curBlock.removeClass('with-more');
        }
    });

    $('.news').each(function() {
        var curList = $(this);

        curList.find('.news-item-inner').css({'height': 'auto'});

        curList.find('.news-item-inner').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.news-item-inner').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });
    });

    $('.main-reviews-list').each(function() {
        var curList = $(this);

        curList.find('.main-reviews-item-text').css({'height': 'auto'});

        curList.find('.main-reviews-item-text').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-text').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });

        curList.find('.main-reviews-item-author').css({'height': 'auto'});

        curList.find('.main-reviews-item-author').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-author').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });

        curList.find('.main-reviews-item-post').css({'height': 'auto'});

        curList.find('.main-reviews-item-post').each(function() {
            var curBlock = $(this);
            var curHeight = curBlock.outerHeight();
            var curTop = curBlock.offset().top;

            curList.find('.main-reviews-item-post').each(function() {
                var otherBlock = $(this);
                if (otherBlock.offset().top == curTop) {
                    var newHeight = otherBlock.outerHeight();
                    if (newHeight > curHeight) {
                        curBlock.css({'height': newHeight + 'px'});
                    } else {
                        otherBlock.css({'height': curHeight + 'px'});
                    }
                }
            });
        });
    });
    
    $('.main-schedule-list').each(function() {
        $('.main-schedule-list').removeClass('open');
        var curTop = $('.main-schedule-list .today').offset().top - $('.main-schedule-list').offset().top;
        $('.main-schedule-list-inner').css({'top': $('.main-schedule-list').outerHeight() / 2 - curTop});
    });
});

$(window).on('load resize scroll', function() {
    var windowScroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if ($('.omni').length == 1) {

        if ($(window).width() > 1169) {
            if (windowScroll + windowHeight > $('footer').offset().top) {
                $('.omni').css({'margin-bottom': (windowScroll + windowHeight) - $('footer').offset().top});
            } else {
                $('.omni').css({'margin-bottom': 0});
            }
        } else {
            if (windowScroll + windowHeight > $('.footer-left').offset().top) {
                $('.omni').css({'margin-bottom': (windowScroll + windowHeight) - $('.footer-left').offset().top});
            } else {
                $('.omni').css({'margin-bottom': 0});
            }
        }
    }

    if ($('.side-link').length == 1) {

        if ($(window).width() > 1169) {
            $('.side-link').css({'margin-top': 0});
            if ($('.side-link').offset().top + $('.side-link').outerHeight() > $('.up-link').offset().top) {
                $('.side-link').css({'margin-top': $('.up-link').offset().top - ($('.side-link').offset().top + $('.side-link').outerHeight())});
            }
        }
    }

});

$(window).on('load', function() {
    $('.archive-gallery').each(function() {
        var shuffleInstance = new Shuffle(this, {
            itemSelector: '.archive-gallery-item',
            roundTransforms: false,
            throttleTime: 0
        });
    });
});