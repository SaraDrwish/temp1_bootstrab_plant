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




// ------------------------------------LOADER

let filterBtn = document.querySelectorAll(".filterBtn li");
let items = document.querySelectorAll(".containerItems .items");

filterBtn.forEach(function(el){   
    el.addEventListener("click" , function(){
         document.querySelector("ul li.active").classList.remove("active");
        el.classList.add("active");

        let target = el.dataset.target;

          items.forEach(function(elmnt){

            elmnt.classList.add("hiddin");
            elmnt.classList.remove("visble");

             
            if(elmnt.dataset.id == target  || target== "all"){
                elmnt.classList.add("visble");
                elmnt.classList.remove("hiddin");
            }

        })

    })
} )

function load(){
    let loader = document.querySelector(".laoder");
    loader.classList.add("fadOut");
}

function fade(){
    setInterval(load , 3000);
}
fade()

// -----------------------------------------------END LOADER

