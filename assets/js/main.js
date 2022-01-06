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



}
)