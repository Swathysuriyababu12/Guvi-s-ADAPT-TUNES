var aud = document.getElementById("bg-audio");

function showRetry() {
  $("#replay").show();
}

function playAgain() {
  $("#replay").hide();
  $(".letter i").css("opacity", "0");
  aud.play();
  $(".letter i").velocity("fadeIn", {
    stagger: 50,
    complete: function (elements) {
      aud.pause();
      aud.currentTime = 0;
      showRetry();
    },
  });
}

aud.onloadeddata = function () {
  $(".loading").hide();
  playAgain();
};
