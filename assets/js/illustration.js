$(document).ready(function() {
  $('body').removeClass('loading').addClass('ready');
  var allCallbacks = anime({
    targets: '.grid-item-container',
    translateY: [110, 0],
    offset: 200,
    duration: 600,
    elasticity: 600,
    easing: [.4,0,.2,1],
		opacity: [0 ,1],
    delay: function(el, i) { return i * 40 }
  });
});



;(function(window) {

	'use strict';

	function StackFx(el) {
		this.DOM = {};
		this.DOM.el = el;
		this.DOM.stack = this.DOM.el.querySelector('.grid-item');
		this.DOM.img = this.DOM.stack.querySelector('.grid-item-image');
		// this.DOM.caption = this.DOM.el.querySelector('.grid__item-caption');
		this.DOM.caption = this.DOM.stack.querySelector('.grid-item-caption');
	}

	StackFx.prototype._removeAnimeTargets = function() {
		anime.remove(this.DOM.img);
		anime.remove(this.DOM.caption);
	};


// HamalFx
	function HamalFx(el) {
		StackFx.call(this, el);
		this._initEvents();
	}

	HamalFx.prototype = Object.create(StackFx.prototype);
	HamalFx.prototype.constructor = HamalFx;

	HamalFx.prototype._initEvents = function() {
		var self = this;
		this._mouseenterFn = function() {
			self._removeAnimeTargets();
			self._in();
		};
		this._mouseleaveFn = function() {
			self._removeAnimeTargets();
			self._out();
		};
		this.DOM.stack.addEventListener('mouseenter', this._mouseenterFn);
		this.DOM.stack.addEventListener('mouseleave', this._mouseleaveFn);
	};

	HamalFx.prototype._in = function() {
		var self = this;
		anime({
			targets: this.DOM.img,
			duration: 1000,
			easing: 'easeOutExpo',
			opacity: 0.3,
      scale: 0.98
		});

		anime({
			targets: [this.DOM.caption],
			duration: 1000,
			easing: 'easeOutExpo',
      opacity: 1,
			translateX: function(target, index) {
				return index === 0 ? 20 : -20;
			}
		});

	};

	HamalFx.prototype._out = function() {
		var self = this;
		anime({
			targets: this.DOM.img,
			duration: 1000,
			easing: 'easeOutElastic',
			opacity: 1,
      scale: 1
		});

		anime({
			targets: [this.DOM.caption],
			duration: 500,
			easing: 'easeOutExpo',
      opacity: 0,
			translateX: 0
		});
	};

	window.HamalFx = HamalFx;
})(window);



//
// var buttonEl = document.querySelector('.grid-item-container');
//
// function animateButton(scale, duration, elasticity) {
//   anime.remove(buttonEl);
//   anime({
//     targets: buttonEl,
//     scale: scale,
//     duration: duration,
//     elasticity: elasticity
//   });
// }
//
// function enterButton() { animateButton(1.2, 800, 400) };
// function leaveButton() { animateButton(1.0, 600, 300) };
//
// buttonEl.addEventListener('mouseenter', enterButton, false);
// buttonEl.addEventListener('mouseleave', leaveButton, false);





// $('.main').waypoint(function() {
//   console.log('enter');
//   var CSStransforms = anime({
//     targets: this.element,
//     translateX: 250,
//     });
//       }, {
//           offset: '100%'
// });


// $(window).on('scroll', function() {
//   $(".main").each(function() {
//     if (isScrolledIntoView($(this))) {
//       $('.anime').addClass("loaded");
//     }
//   });
// });


// var allCallbacks = anime({
//   targets: '.anime',
//   offset: 500,
//   duration: function(t,i) {
//     return 500 + i*50;
//   },
//   easing: 'easeOutExpo',
//   delay: function(t,i) {
//     return i * 30;
//   },
//   opacity: {
//     value: [0,1],
//     duration: function(t,i) {
//       return 400 + i*30;
//     },
//     easing: 'linear'
//   },
//   translateY: [75,0]
// });





// var allCallbacks = anime({
//   animeOpts: {
//     targets: '.anime',
//     duration: function(t,i) {
//       return 500 + i*50;
//     },
//     easing: 'easeOutExpo',
//     delay: function(t,i) {
//       return i * 20;
//     },
//     opacity: {
//       value: [0,1],
//       duration: function(t,i) {
//         return 250 + i*50;
//       },
//       easing: 'linear'
//     },
//     translateY: [75,0]
//   }
// });



// 'Amun': {
//   sortTargetsFn: function(a,b) {
//     var aBounds = a.getBoundingClientRect(),
//       bBounds = b.getBoundingClientRect();
//
//     return (aBounds.left - bBounds.left) || (aBounds.top - bBounds.top);
//   },
//   animeOpts: {
//     duration: function(t,i) {
//       return 500 + i*50;
//     },
//     easing: 'easeOutExpo',
//     delay: function(t,i) {
//       return i * 20;
//     },
//     opacity: {
//       value: [0,1],
//       duration: function(t,i) {
//         return 250 + i*50;
//       },
//       easing: 'linear'
//     },
//     translateY: [75,0]
//   }
// }
