/** @see https://github.com/aFarkas/lazysizes */
import 'lazysizes'

/** @see https://highlightjs.org */
import hljs from 'highlight.js'

window.hljs = hljs

/** @see https://swiperjs.com */
import Swiper, { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

window.swiper = swiper
