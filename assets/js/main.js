$(document).ready( ()=>{

$(".close-icon").click(function(){
    $(".navbar-nav").animate({"right" :"-100%" } , 200);
    $(".navbar-collapse").removeClass("show");

});

$(".navbar-toggler").click(function(){

    $(".navbar-nav").animate({"right" :"0" } , 200);

});



$(".nav-item").click( function(){

    // $(".nav-drop-down").addClass(".click-drop-toggle");
    $(this).toggleClass("click-drop-toggle");

})

$(window).scroll(function() {
    $(".navbar").toggleClass("scrolling" , $(this).scrollTop() > 50);
})







// ------------------------------------------------------------------------------brand start


$('.sec11').owlCarousel({
    loop:true,
    margin:25,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


// -------------------------------------------------------------------------------------------------




}
)




