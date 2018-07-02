function preloadHandler(g, anim) {
    var Home = Barba.BaseView.extend({
        namespace: "home",
        onEnter: function() {

        },
        onEnterCompleted: function() {
            preloaderTimeline(anim.animateHome)
        },
        onLeave: function() {
            $('.b-footer').remove();
            switch (g.bgColor) {
                case g.bRed:
                    $(".layer--initial").removeClass("l-blue l-black l-green").addClass("l-red");
                    break;
                case g.bGreen:
                    $(".layer--initial").removeClass("l-blue l-black l-red").addClass("l-green");
                    break;
                case g.bBlue:
                    $(".layer--initial").removeClass("l-green l-black l-red").addClass("l-blue");
                    break;
            }
        },
        onLeaveCompleted: function() {}
    });

    var Info = Barba.BaseView.extend({
        namespace: "info",
        onEnter: function() {

        },
        onEnterCompleted: function() {

        },
        onLeave: function() {
            switch (g.bgColor) {
                case g.bRed:
                    $(".layer--initial").removeClass("l-blue l-black l-green").addClass("l-red");
                    break;
                case g.bGreen:
                    $(".layer--initial").removeClass("l-blue l-black l-red").addClass("l-green");
                    break;
                case g.bBlue:
                    $(".layer--initial").removeClass("l-green l-black l-red").addClass("l-blue");
                    break;
            }
        },
        onLeaveCompleted: function() {

        }
    });
    var About = Barba.BaseView.extend({
        namespace: "about",
        onEnter: function() {

        },

        onEnterCompleted: function() {

        },
        onLeave: function() {
            $(".layer--initial").removeClass("l-red l-black l-green").addClass("l-blue");
        },
        onLeaveCompleted: function() {

        }
    });
    var Gallery = Barba.BaseView.extend({
        namespace: "gallery",
        onEnter: function() {
            $("html").css({
                overflowY: "auto"
            });
        },

        onEnterCompleted: function() {
            preloaderTimeline(anim.animateGallery);
        },
        onLeave: function() {
            $("html").css({
                overflowY: "scroll"
            });
            $(".layer--initial").removeClass("l-red l-blue l-green").addClass("l-black");

        },
        onLeaveCompleted: function() {

        }
    });

    var Support = Barba.BaseView.extend({
        namespace: "support",
        onEnter: function() {
            $('[data-remodal-id=flow-modal]').parent(".remodal-wrapper").css({
                zIndex: 15
            })
        },
        onEnterCompleted: function() {

        },
        onLeave: function() {
            $(".layer--initial").removeClass("l-red l-blue l-green").addClass("l-blue");
            $("html").removeClass("remodal-is-locked");
            $('.b-footer').remove();

        },
        onLeaveCompleted: function() {
            var modalWrapper = $('[data-remodal-id=flow-modal]').parent(".remodal-wrapper");
            modalWrapper.removeAttr("style");
            $(".remodal-overlay").removeAttr("style");
        }
    });
    return {
        Home: Home,
        Info: Info,
        About: About,
        Gallery: Gallery,
        Support: Support
    }
}
