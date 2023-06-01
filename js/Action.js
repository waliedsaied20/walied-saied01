$(document).ready(function () {

    $(".owl-carousel").owlCarousel({

        autoPlay: true,
        responsive: true,
        items : 5,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsMobile : [479,1]
    });

});


// $(document).ready(function() {
 
//     $("#owl-demo").owlCarousel({
   
//         autoPlay: 3000, //Set AutoPlay to 3 seconds
   
//         items : 4,
//         itemsDesktop : [1199,3],
//         itemsDesktopSmall : [979,3]
   
//     });
   
//   });