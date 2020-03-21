window.onscroll = function() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.background = "rgba(0, 0, 0, 0.95)";
  } else {
    document.getElementById("header").style.background = "transparent";
  }
};
