Barba.Pjax.start();


const Home = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function () {
    const parent = document.getElementById('container');
    // This are the animations I already call in home.js
    const parallax = new Parallax(parent, {
      invertX: true,
      invertY: true,
      limitX: 26,
      limitY: 5,
    });
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
  },
  onEnterCompleted: function () {},
  onLeave: function () {
    // var homeStripe = anime({
    //   targets: '.stripe',
    //   translateY: [100, 0],
    //   opacity: [0.0, 1.0]
    // });
    console.log('aco');
  },
  onLeaveCompleted: function () {}
})

// Don't forget to init the view!
Home.init()

const Illustration = Barba.BaseView.extend({
  namespace: 'illustration',
  onEnter: function () {
    var grid = document.getElementById('grid');
    salvattore.registerGrid(grid);
      var enterImage = anime({
        targets: '.grid-item-container',
        translateY: [110, 0],
        offset: 200,
        duration: 600,
        elasticity: 600,
        easing: [.4,0,.2,1],
    		opacity: [0 ,1],
        delay: function(el, i) { return i * 40 }
      });
      (function() {
        [].slice.call(document.querySelectorAll('.grid-item-container')).forEach(function(stackEl) {
          new HamalFx(stackEl);
        });
      })();

    console.log('entering illustration');
  },
  onEnterCompleted: function () {},
  onLeave: function () {
    var enterImage = anime({
      targets: '.grid-item-container',
      translateY: [0, 110],
      offset: 200,
      duration: 600,
      elasticity: 600,
      easing: [.4,0,.2,1],
      opacity: [0 ,1],
      delay: function(el, i) { return i * 40 }
    });

    console.log('leaving illustration');
  },
  onLeaveCompleted: function () {}
})

Illustration.init()









// const Work = Barba.BaseView.extend({
//   namespace: 'work',
//   onEnter: function () {
//     var grid = document.getElementById('grid');
//     salvattore.registerGrid(grid);
//       var enterImage = anime({
//         targets: '.something',
//         translateY: ['100%', 0],
//         offset: 1000,
//         duration: 600,
//         elasticity: 600,
//         easing: [.4,0,.2,1],
//     		opacity: [0 ,1],
//         delay: function(el, i) { return i * 40 }
//       });
//
//     console.log('entering work');
//   },
//   onEnterCompleted: function () {},
//   onLeave: function () {
//     console.log('leaving work');
//   },
//   onLeaveCompleted: function () {}
// })
//
// Work.init()


const Work2 = Barba.BaseView.extend({
  namespace: 'work-2',
  onEnter: function () {
    var enterImage = anime({
      targets: '.something',
      translateX: ['100%', 0],
      duration: 600,
      elasticity: 600,
      easing: [.4,0,.2,1]
    });
    // var grid = document.getElementById('grid');
    // console.log('entering work-2');
  },
  onEnterCompleted: function () {},
  onLeave: function () {
    // console.log('leaving work-2');
  },
  onLeaveCompleted: function () {}
})

Work2.init()
