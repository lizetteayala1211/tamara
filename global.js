
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
function changeImage01() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action01() {
    var audio = document.getElementById("audio-01");
    if (playing === false) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
  }

/* Brick 02 Audio */
function changeImage02() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action02() {
    var audio = document.getElementById("audio-02");
    if (playing === false) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
  }

/* Brick 03 Audio */
function changeImage03() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action03() {
    var audio = document.getElementById("audio-03");
    if (playing === false) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
  }

/* Brick 04 Audio */
function changeImage04() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action04() {
    var audio = document.getElementById("audio-04");
    if (playing === false) {
      audio.play();
      playing = true;
    } else {
      audio.pause();
      playing = false;
    }
  }

/* Brick 05 Audio */
function changeImage05() {
     $(".play-button").toggle();
     $(".pause-button").toggle();
  }
  
  var playing = false;

  function action05() {
    var audio = document.getElementById("audio-05");
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


   $( "#all-content" ).delay( 6000 ).animate({ "marginTop":"-35px" }, 2000 );
   $( "#top-part" ).delay( 6000 ).animate({ height: "15%" }, 2000 );
   $( "#first-opening-p" ).delay( 7000 ).animate({ height: "100%" }, 3000 );
   $( "#opening-title" ).delay( 7500 ).animate({ "marginTop":"100px" }, 3000 );
   $( "#opening-title" ).delay( 8000 ).fadeOut( 3000 );
   $( "#bottom-part" ).delay( 0 ).animate({ height: "25%" }, 3000 );
   $( "#opening-poem" ).delay( 2000 ).animate({ "opacity":"1" }, 3000 );
   $( "#opening-poem" ).delay( 8500 ).fadeIn( 2000 );
   $( "#first-opening-p" ).delay( 9000 ).toggleClass('scroll', 3000 );
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

  $( "#l2" ).delay( 0 ).fadeOut( 2000 );
  $( "#l3" ).delay( 0 ).fadeOut( 2000 );
  $( "#l4" ).delay( 0 ).fadeOut( 2000 );
  $( "#l5" ).delay( 0 ).fadeOut( 2000 );
  $( "#l1" ).delay( 0 ).fadeIn( 2000 );
  $( "#p2" ).delay( 0 ).fadeOut( 2000 );
  $( "#p3" ).delay( 0 ).fadeOut( 2000 );
  $( "#p4" ).delay( 0 ).fadeOut( 2000 );
  $( "#p5" ).delay( 0 ).fadeOut( 2000 );
  $( "#p1" ).delay( 0 ).fadeIn( 2000 );
  $( "#first-opening-p" ).delay( 2000 ).animate({ height: "1.5vh" }, 3000 );
  $( "#all-content" ).delay( 2500 ).animate({ "marginTop":"5px" }, 3000 );
  $( "#all-content" ).delay( 2500 ).animate({ height: "93%" }, 3000 );
  $("#title-top-01").delay( 2500 ).addClass( "remove", 3000 );
  $( "#top-part" ).delay( 2500 ).animate({ height: "70%" }, 3000 );
  $( "#bottom-part" ).delay( 2500 ).animate({ height: "20%" }, 3000 );
  $("#main-opacity").delay( 1000 ).addClass( "full-opacity", 3000 );
  $( "#main-opacity" ).delay( 1000 ).animate({ height: "15%" }, 3000 );
  $( "#first-opening-p" ).delay( 6000 ).toggleClass('scroll', 3000 );
  $( "#experience" ).delay( 3000 ).animate({ height: "80%" }, 3000 );
  $( "#all-isolated-title" ).delay( 3000 ).animate({ height: "15%" }, 3000 );
  $( "#second-brick" ).delay( 3000 ).animate({ width: "0vw" }, 3000 );
  $( "#second-brick" ).delay( 0 ).fadeOut( 3000 );
  $( "#first-brick" ).delay( 3000 ).animate({ width: "101vw" }, 3000 );
  $("#fourth-brick").delay( 1000 ).addClass( "bg-change", 3000 );
  $("#first-brick").delay( 3000 ).addClass( "experience-bg", 3000 );

}

if (isMobile) {

    }


return false;

          }
        });


/*  Brick Two Link Trigger Actions (Reveal Content)  */


// Wait for the page to load first
 $( window ).on( "load", function() {

 //Get a reference to the link on the page
 // with an id of "brick-02"
 var Brick02 = document.getElementById("brick-02");

 //Set code to run when the link is clicked
 // by assigning a function to "onclick"
 Brick02.onclick = function() {

if (isDesktop) {


    $( "#l1" ).delay( 0 ).fadeOut( 2000 );
    $( "#l3" ).delay( 0 ).fadeOut( 2000 );
    $( "#l4" ).delay( 0 ).fadeOut( 2000 );
    $( "#l5" ).delay( 0 ).fadeOut( 2000 );
    $( "#l2" ).delay( 0 ).fadeIn( 2000 );
    $( "#p1" ).delay( 0 ).fadeOut( 2000 );
    $( "#p3" ).delay( 0 ).fadeOut( 2000 );
    $( "#p4" ).delay( 0 ).fadeOut( 2000 );
    $( "#p5" ).delay( 0 ).fadeOut( 2000 );
    $( "#p2" ).delay( 0 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-three" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-four" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-five" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-two" ).delay( 1000 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-three" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-four" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-five" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    // $( "#isolated-three" ).delay( 1500 ).animate({ height: "100%" }, 2000 );
    $( "#ex-01" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-03" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-04" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-05" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-02" ).delay( 1500 ).fadeIn( 2000 );


}

if (isMobile) {

    }


return false;

          }
        });


/*  Brick Three Link Trigger Actions (Reveal Content)  */


// Wait for the page to load first
 $( window ).on( "load", function() {

 //Get a reference to the link on the page
 // with an id of "brick-03"
 var Brick03 = document.getElementById("brick-03");

 //Set code to run when the link is clicked
 // by assigning a function to "onclick"
 Brick03.onclick = function() {

if (isDesktop) {


    $( "#l1" ).delay( 0 ).fadeOut( 2000 );
    $( "#l2" ).delay( 0 ).fadeOut( 2000 );
    $( "#l4" ).delay( 0 ).fadeOut( 2000 );
    $( "#l5" ).delay( 0 ).fadeOut( 2000 );
    $( "#l3" ).delay( 0 ).fadeIn( 2000 );
    $( "#p1" ).delay( 0 ).fadeOut( 2000 );
    $( "#p2" ).delay( 0 ).fadeOut( 2000 );
    $( "#p4" ).delay( 0 ).fadeOut( 2000 );
    $( "#p5" ).delay( 0 ).fadeOut( 2000 );
    $( "#p3" ).delay( 0 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-two" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-four" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-five" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-three" ).delay( 1000 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-two" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-four" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-five" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    // $( "#isolated-three" ).delay( 1500 ).animate({ height: "100%" }, 2000 );
    $( "#ex-01" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-02" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-04" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-05" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-03" ).delay( 1500 ).fadeIn( 2000 );

}

if (isMobile) {

    }


return false;

          }
        });

/*  Brick Four Link Trigger Actions (Reveal Content)  */


// Wait for the page to load first
 $( window ).on( "load", function() {

 //Get a reference to the link on the page
 // with an id of "brick-04"
 var Brick04 = document.getElementById("brick-04");

 //Set code to run when the link is clicked
 // by assigning a function to "onclick"
 Brick04.onclick = function() {

if (isDesktop) {

    $( "#l1" ).delay( 0 ).fadeOut( 2000 );
    $( "#l2" ).delay( 0 ).fadeOut( 2000 );
    $( "#l3" ).delay( 0 ).fadeOut( 2000 );
    $( "#l5" ).delay( 0 ).fadeOut( 2000 );
    $( "#l4" ).delay( 0 ).fadeIn( 2000 );
    $( "#p1" ).delay( 0 ).fadeOut( 2000 );
    $( "#p2" ).delay( 0 ).fadeOut( 2000 );
    $( "#p3" ).delay( 0 ).fadeOut( 2000 );
    $( "#p5" ).delay( 0 ).fadeOut( 2000 );
    $( "#p4" ).delay( 0 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-two" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-three" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-five" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-four" ).delay( 1000 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-two" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-three" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-five" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    // $( "#isolated-three" ).delay( 1500 ).animate({ height: "100%" }, 2000 );
    $( "#ex-01" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-02" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-03" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-05" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-04" ).delay( 1500 ).fadeIn( 2000 );

}

if (isMobile) {

    }


return false;

          }
        });


/*  Brick Five Link Trigger Actions (Reveal Content)  */


// Wait for the page to load first
 $( window ).on( "load", function() {

 //Get a reference to the link on the page
 // with an id of "brick-05"
 var Brick05 = document.getElementById("brick-05");

 //Set code to run when the link is clicked
 // by assigning a function to "onclick"
 Brick05.onclick = function() {

if (isDesktop) {

    $( "#l1" ).delay( 0 ).fadeOut( 2000 );
    $( "#l2" ).delay( 0 ).fadeOut( 2000 );
    $( "#l3" ).delay( 0 ).fadeOut( 2000 );
    $( "#l4" ).delay( 0 ).fadeOut( 2000 );
    $( "#l5" ).delay( 0 ).fadeIn( 2000 );
    $( "#p1" ).delay( 0 ).fadeOut( 2000 );
    $( "#p2" ).delay( 0 ).fadeOut( 2000 );
    $( "#p3" ).delay( 0 ).fadeOut( 2000 );
    $( "#p4" ).delay( 0 ).fadeOut( 2000 );
    $( "#p5" ).delay( 0 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-two" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-three" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-four" ).delay( 0 ).fadeOut( 2000 );
    $( "#isolated-five" ).delay( 1000 ).fadeIn( 2000 );
    $( "#isolated-one" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-two" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-three" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    $( "#isolated-four" ).delay( 1000 ).animate({ height: "0%" }, 2000 );
    // $( "#isolated-three" ).delay( 1500 ).animate({ height: "100%" }, 2000 );
    $( "#ex-01" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-02" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-03" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-04" ).delay( 1500 ).fadeOut( 2000 );
    $( "#ex-05" ).delay( 1500 ).fadeIn( 2000 );

}

if (isMobile) {

    }


return false;

          }
        });






