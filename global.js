
/*** Document Load Test ***/
$( document ).ready(function() {
  console.log( "document loaded" );
});

/***  Nav Bar Desktop to Mobile view Responsiveness ***/
function MobiileNavOpen() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/*** Audio File JS ***/

/* Brick 01 Audio */
function changeImage() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action() {
    var audio = document.getElementById("audio");
    if (playing === false) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
  }


/*** UX Functions separated by viewport sizes ***/
const isDesktop = window.matchMedia("only screen and (min-width:641px)").matches;

const isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

$( window ).on( "load", function() {
   console.log( "window loaded" );

   if (isDesktop) {

   $( "#bottom-part" ).delay( 3000 ).animate({ overflow:"visible" }, 1300 );
   $( "#third-brick" ).delay( 3000 ).animate({ height: "28vh" }, 1300 );
   $( "#fourth-brick" ).delay( 3000 ).animate({ height: "28vh" }, 1300 );
   $( "#fifth-brick" ).delay( 3000 ).animate({ height: "28vh" }, 1300 );
   $( "#all-content" ).delay( 3500 ).animate({ "marginTop":"-35px" }, 1300 );
   $( "#top-part" ).delay( 3500 ).animate({ height: "15%" }, 1300 );
   $( "#all-content" ).delay( 3000 ).animate({ overflow:"visible" }, 1300 );
   $( "#all-content" ).delay( 3000 ).animate({ height: "99.6%" }, 1300 );
   $( "#first-opening-p" ).delay( 5000 ).animate({ height: "50%" }, 1300 );
   $( "#opening-title" ).delay( 5000 ).animate({ "marginTop":"200px" }, 1300 );
   $( "#first-opening-p" ).delay( 6000 ).animate({ height: "70%" }, 1300 );
   $( "#opening-title" ).delay( 3000 ).fadeOut( 2000 );
   $( "#bottom-part" ).delay( 8000 ).animate({ height: "20%" }, 1300 );
   $( "#first-opening-p" ).delay( 6000 ).toggleClass('scroll', 2000 );
   $( "#opening-poem" ).delay( 6000 ).animate({ "opacity":"1" }, 2000 );
   $( "#opening-poem" ).delay( 6000 ).fadeIn( 2000 );
 }

    if (isMobile) {

    }

});


/*  Brick One Link Trigger Actions (Reveal Content)  */

 // Wait for the page to load first
 $( window ).on( "load", function() {

 //Get a reference to the link on the page
 // with an id of "brick-01"
 var Brick01 = document.getElementById("brick-01");

 //Set code to run when the link is clicked
 // by assigning a function to "onclick"
 Brick01.onclick = function() {

if (isDesktop) {

  $( "#opening-poem" ).delay( 1000 ).fadeOut( 1500 );
  // $( "#first-opening-p" ).delay( 3000 ).toggleClass('scroll', 1300 );
  $( "#all-content" ).delay( 1000 ).animate({ overflow:"hidden" }, 1300 );
  // $( "#all-content" ).delay( 3000 ).animate({ height: "90%" }, 1300 );
  $( "#first-opening-p" ).delay( 3000 ).animate({ height: "2%" }, 1300 );
  $( "#all-content" ).delay( 1000 ).animate({ "marginTop":"0px" }, 1300 );
  $( "#bottom-part" ).delay( 3000 ).animate({ height: "40%" }, 1300 );
  $( "#all-content" ).delay( 3000 ).animate({ height: "94%" }, 1300 );
  $( "#third-brick" ).delay( 3000 ).animate({ height: "30vh" }, 1300 );
  $( "#fourth-brick" ).delay( 3000 ).animate({ height: "30vh" }, 1300 );
  $( "#fifth-brick" ).delay( 3000 ).animate({ height: "30vh" }, 1300 );
  $( "#top-part" ).delay( 3000 ).animate({ height: "60%" }, 1300 );
  $( "#third-brick" ).delay( 4000 ).animate({ height: "40vh" }, 1300 );
  $( "#fourth-brick" ).delay( 4000 ).animate({ height: "40vh" }, 1300 );
  $( "#fifth-brick" ).delay( 4000 ).animate({ height: "40vh" }, 1300 );

}

if (isMobile) {

    }


return false;

          }
        });


/*  Brick Two Link Trigger Actions (Reveal Content)  */








