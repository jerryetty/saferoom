const ScrollMagic = require('scrollmagic')

module.exports = {
  section2: (element) => {
    const Controller = new ScrollMagic.Controller()
    const Scene = new ScrollMagic.Scene()
    Scene.duration(700)
    // Scene.triggerHook(element)
    Scene.setPin(element)
    Scene.addTo(Controller)
  }
}