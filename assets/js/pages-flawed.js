Barba.Pjax.start();

// var HideShowTransition = Barba.BaseTransition.extend({
//   start: function() {
//     this.newContainerLoading.then(this.finish.bind(this));
//   },
//
//   finish: function() {
//     document.body.scrollTop = 0;
//     this.done();
//   }
// });
//
// Barba.Pjax.getTransition = function() {
//   return HideShowTransition;
// };

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
     // This function is automatically called as soon the Transition starts
     // this.newContainerLoading is a Promise for the loading of the new container
     // (Barba.js also comes with an handy Promise polyfill!)

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
      // console.log('fade out');
  },

  fadeOut: function() {
     // this.oldContainer is the HTMLElement of the old Container
    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },
  fadeIn: function() {
    // this.newContainer is the HTMLElement of the new Container
    //  At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
    //  Please note, newContainer is available just after newContainerLoading is resolved!
    var _this = this;
    var $el = $(this.newContainer);
    $(this.oldContainer).hide();
    $el.css({
      visibility : 'visible',
      opacity : 0
    });
    $el.animate({ opacity: 1 }, 2000, function() {
       // Do not forget to call .done() as soon your transition is finished!
       // .done() will automatically remove from the DOM the old Container
      _this.done();
    });
  }
});


 // Next step, you have to tell Barba to use the new Transition


Barba.Pjax.getTransition = function() {
   // Here you can use your own logic!
   // For example you can use different Transition based on the current page or link...
  return FadeTransition;
};
var Illustration = Barba.BaseView.extend({
  namespace: 'illustration',
  onEnter: function() {
  },
  onEnterCompleted: function() {
  },
  onLeave: function() {
  },
  onLeaveCompleted: function() {
  }
});
Illustration.init();

var Homepage = Barba.BaseView.extend({
  namespace: 'home',
  onEnter: function() {
    // The new Container is ready and attached to the DOM.
    const parent = document.getElementById('container');
    const parallax = new Parallax(parent, {
      invertX: true,
      invertY: true,
      limitX: 26,
      limitY: 5,
    });
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

// Don't forget to init the view!
Homepage.init();
