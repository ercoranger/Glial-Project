//ie-alert
if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
     window.alert('建議使用其他瀏覽器以獲得更好體驗，如Chrome, Safari等');
}

var section1 = document.getElementById('landingIntro');
var section2 = document.getElementById('astrocyte');
var section3 = document.getElementById('schwann-cells');
var section4 = document.getElementById('satelite-cells');

var sec1Height = section1.offsetHeight;
var sec2Height = section2.offsetHeight + sec1Height - 20;
var sec3Height = section3.offsetHeight + sec2Height - 20;
var sec4Height = section4.offsetHeight + sec3Height - 30;

$(function () {
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();

        if (scrollVal >= sec1Height) {
            $('.nav').addClass('nav-fixed');
        } else {
            $('.nav').removeClass('nav-fixed');
        }

        if (scrollVal >= sec1Height) {
            $('.light-1').addClass('on-page');
            $('.s1-hi').addClass('slide-in-odd');
        } else {
            $('.light-1').removeClass('on-page');
        }

        if (scrollVal >= sec2Height) {
            $('.light-2').addClass('on-page');
            $('.light-1').removeClass('on-page');
            $('.s2-hi').addClass('slide-in-odd');
        } else {
            $('.light-2').removeClass('on-page');
        }

        if (scrollVal >= sec3Height) {
            $('.light-3').addClass('on-page');
            $('.light-2').removeClass('on-page');
            $('.s3-hi').addClass('slide-in-odd');
        } else {
            $('.light-3').removeClass('on-page');
        }

        if (scrollVal >= sec4Height) {
            $('.light-4').addClass('on-page');
            $('.light-3').removeClass('on-page');
        } else {
            $('.light-4').removeClass('on-page');
        }

    });

    $(".click2buy").mouseover(function () {
        $(".click2buy-text").addClass('show-click2buy');
    });

    $(".click2buy").mouseout(function () {
        $(".click2buy-text").removeClass('show-click2buy');
    });
    
     
});