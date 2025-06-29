// Scroll Progress Bar
window.onscroll = function() {
  var scrollProgress = document.getElementById("scrollProgress");
  var totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollPosition = document.documentElement.scrollTop;
  var scrollPercentage = (scrollPosition / totalHeight) * 100;
  scrollProgress.style.width = scrollPercentage + "%";
};
