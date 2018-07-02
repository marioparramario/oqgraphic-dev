// ============================================================
// Barba
// ============================================================
// var myAnimation = anime({
//   targets: ['.barba-container'],
//   translateX: '13rem',
//   rotate: 0,
//   duration: 1950,
//   loop: false
// });


const FadeLeftTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        translateX: -500,
        easing: 'easeInQuart',
        duration: 400,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this
    const oldContainer = this.oldContainer
    const newContainer = this.newContainer
    window.scrollTo(0, 0)
    oldContainer.style.display = 'none'
    newContainer.style.visibility = 'visible'
    newContainer.style.opacity = 0
    newContainer.style.transform = 'translateX(100px)'
    anime({
      targets: newContainer,
      opacity: 1,
      translateX: 0,
      easing: 'easeOutQuart',
      duration: 1000,
      complete: function () {
        _this.done()
      }
    })
  }
})

const FadeRightTransition = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },
  fadeOut: function () {
    const oldContainer = this.oldContainer
    return new Promise(function (resolve) {
      anime({
        targets: oldContainer,
        opacity: 0,
        translateX: 500,
        easing: 'easeInQuart',
        duration: 400,
        complete: function () {
          resolve()
        }
      })
    })
  },
  fadeIn: function () {
    const _this = this
    const oldContainer = this.oldContainer
    const newContainer = this.newContainer
    window.scrollTo(0, 0)
    oldContainer.style.display = 'none'
    newContainer.style.visibility = 'visible'
    newContainer.style.opacity = 0
    newContainer.style.transform = 'translateX(-100px)'
    anime({
      targets: newContainer,
      opacity: 1,
      translateX: 0,
      easing: 'easeOutQuart',
      duration: 1000,
      complete: function () {
        _this.done()
      }
    })
  }
})





Barba.Pjax.getTransition = function () {
  if (location.pathname === '/' || location.search.includes('next')) {
    return FadeRightTransition
  }
  return FadeLeftTransition
}

const Home = Barba.BaseView.extend({
  namespace: 'home',
  menu: document.querySelector('.navbar'),
  header: document.querySelector('.section-home'),
  onEnter: function () {
    console.log('aca');
    this.menu.classList.remove('open')
    this.header.classList.remove('display')
  },
  onEnterCompleted: function () {},
  onLeave: function () {
    console.log('aco');
    this.header.classList.add('display')
    this.menu.classList.add('open')
  },
  onLeaveCompleted: function () {}
})

// Don't forget to init the view!
Home.init()

// ============================================================
// Document Ready
// ============================================================
document.addEventListener('DOMContentLoaded', function (e) {
  Barba.Pjax.start()
  hljs.initHighlightingOnLoad()
})

// ============================================================
// On Page Transition
// ============================================================
Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
  // Reinitialize code highlights
  hljs.initHighlighting.called = false
  hljs.initHighlighting()
  console.log('finally');
})
