var BarbaWidget = {
    init: function() {
        var scope = this;
        Barba.Pjax.start();
        Barba.Prefetch.init();
        Barba.Pjax.getTransition = function() {
            return scope.MovePage;
        };
    },
    MovePage: Barba.BaseTransition.extend({
        start: function() {
            Promise.all([this.newContainerLoading]).then(this.movePages.bind(this));
        },
        movePages: function() {
            var scope = this;

            TweenLite.set(this.newContainer, {
                visibility: 'visible',
                xPercent: 100,
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0
            });

            TweenLite.to(this.oldContainer, 0.6, { xPercent: -100 });
            TweenLite.to(this.newContainer, 0.6, { xPercent: 0, onComplete: function() {
            TweenLite.set(scope.newContainer, { clearProps: 'all' });
                scope.done();
            }});
        }
    })
};

document.addEventListener("DOMContentLoaded", function() {
    BarbaWidget.init();
});


// var FadeTransition = Barba.BaseTransition.extend({
//     start: function() {
//         Promise
//         .all([this.newContainerLoading, this.fadeOut()])
//         .then(this.fadeIn.bind(this));
//     },
//     fadeOut: function() {
//         return new Promise((resolve, reject) => {
//         slider = undefined;
//         anime({ targets: '.slideshow', translateY: [0,10], opacity: "0", easing: "easeInOutQuint", duration: 250 });
//         anime({ targets: '.vanim', translateY: [0,10], opacity: "0", easing: "easeInOutQuint", duration: 250, delay: function(el, index) { return index * 50; }, complete: () => { resolve(); } });
//         });
//     },
//     fadeIn: function() {
//         // Scroll to Top
//          anime({targets: [document.documentElement, document.body], scrollTop: 0, duration: 200,easing: 'easeInOutQuad'});
//         // Junk Dealing and Animation Start
//         var _this = this;
//         $(this.newContainer).css({ visibility : 'visible' });
//         $(this.oldContainer).hide();
//         $('.vanim').css({ opacity : 0 });
//         anime.remove('.vanim');
//         anime({ targets: '.vanim', translateY: [-10,0], opacity: "1", easing: "easeInOutQuint", duration: 250, delay: function(el, index) { return index * 50; }, complete: () => { _this.done(); $('.vanim').css({'transform' : ''}); } });
//         }
// });
//
// Barba.Pjax.getTransition = function() { return FadeTransition; };
