$(document).ready(function () {
    $(window).scroll(function () { 
        if ($(window).scrollTop() > 250){
            $(".features .icon").addClass("animate");
            $(".features .content").addClass("animate");
            $(".features .content p").addClass("animate");
            $(".features_items img").addClass("animate");
        }
        if ($(window).scrollTop() > 1800){
            $(".banner2_content h1").addClass("animate");
            $(".banner2_content a").addClass("animate");
            $(".banner2_items img").addClass("animate");
        }
        if ($(window).scrollTop() > 2650){
            $(".download_items img").addClass("animate");
        }
    });
});