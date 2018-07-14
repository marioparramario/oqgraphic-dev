document.addEventListener('DOMContentLoaded', function() {

  const parent = document.getElementById('container');
  const parallax = new Parallax(parent, {
    invertX: true,
    invertY: true,
    limitX: 26,
    limitY: 5,
  });

  //
  // var homeBackground = anime({
  //   targets: '#container',
  //   translateY: ['100%', 0],
  //   offset: 500,
  //   duration: 2000,
  //   easing: [.4,0,.2,1],
  // });

  var homeHeadline = anime({
    targets: '#hello-there h2',
    translateY: [100, 0],
    offset: 500,
    duration: 600,
    elasticity: 600,
    easing: [.4,0,.2,1],
    delay: function(el, i) { return i * 40 },
  });
  var homeParagraph = anime({
    targets: '.section-home p',
    translateY: [100, 0],
    opacity: [0.0, 1.0],
    offset: 800,
    duration: 800,
    easing: 'easeOutCubic',
    delay: function(el, i) { return i * 80 },
  });


}, false);


// Force page to start at the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Hide navbar on scroll down // Currently not working
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transform = 'translateY(0)';
  } else {
    document.getElementById("navbar").style.transform = 'translateY(-100%)';
  }
  prevScrollpos = currentScrollPos;
}
