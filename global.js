/*** Document Load Test ***/
$(document).ready(function() {
  console.log("document loaded");
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

/*** Audio Files Dynamic Switch ***/

var playing = false;

function action() {
  var audio = document.getElementById(`audio-0${n}`);
  if (playing === false) {
    audio.play();
    playing = true;
  } else {
    audio.pause();
    playing = false;
  }
}

// var playing = true;

// function pause() {
//   var audio = document.getElementById(`audio-0${n}`);
//   if (playing === true) {
//     audio.pause();
//     playing = false;
//   // } else {
//   //   audio.pause();
//   //   playing = false;
//   }
// }

/*** UX Functions separated by viewport sizes ***/
const isDesktop = window.matchMedia("only screen and (min-width:641px)").matches;
const isMobile = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

$(window).on("load", function() {
  console.log("window loaded");

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

  if (isMobile) {}

});

/*** All Brick Link Trigger Actions (Reveal Content) ***/

// Wait for the page to load first
$(window).on("load", function() {

  //Get a reference to the link on the page

  $('[id^="brick"]').on('click', function() {

    if (isDesktop) {

      window.n = this.id.slice(-1)
      if (n == 1) {
        $("#first-opening-p").delay(2000).animate({height: "1.5vh"}, 3000);
        $("#all-content").delay(2500).animate({"marginTop": "5px"}, 3000);
        $("#all-content").delay(2500).animate({height: "93%"}, 3000);
        $("#title-top-01").delay(2500).addClass("remove", 3000);
        $("#top-part").delay(2500).animate({height: "70%"}, 3000);
        $("#bottom-part").delay(2500).animate({height: "20%"}, 3000);
        $("#main-opacity").delay(1000).addClass("full-opacity", 3000);
        $("#main-opacity").delay(1000).animate({height: "15%"}, 3000);
        $("#first-opening-p").delay(6000).toggleClass('scroll', 3000);
        $("#experience").delay(3000).animate({height: "80%"}, 3000);
        $("#all-isolated-title").delay(3000).animate({height: "15%"}, 3000);
        $("#second-brick").delay(3000).animate({width: "0vw"}, 3000);
        $("#second-brick").delay(0).fadeOut(3000);
        $("#first-brick").delay(3000).animate({width: "101vw"}, 3000);
        $("#fourth-brick").delay(1000).addClass("bg-change", 3000);
        $("#first-brick").delay(3000).addClass("experience-bg", 3000);
      }

      else {
        $('[id^="isolated"]').fadeOut(2000);
        $(`[id^="isolated"][n=${n}]`).delay(1000).fadeIn(2000);
        $(`[id^="isolated"]:not([n=${n}])`).delay(1000).animate({height: "0%"}, 2000);
        $('.experience-poem').fadeOut(2000);
        $(`#ex-0${n}`).delay(1500).fadeIn(2000);
      }

    }
    else if (isMobile) {}
    return false;

  })

});
