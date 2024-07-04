/** @see https://github.com/aFarkas/lazysizes */
import lazySizes from 'lazysizes'

lazySizes.cfg.preloadAfterLoad = true

/** @see https://highlightjs.org */
import hljs from 'highlight.js'

window.hljs = hljs

/** @see https://swiperjs.com */
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const swiper = new Swiper('.swiper', {
  modules: [Autoplay, Navigation],
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

/** @see https://photoswipe.com */
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

const lightbox = new PhotoSwipeLightbox({
  gallery: '#article',
  children: 'figure[class^=image] a[data-pswp-src]',
  showHideAnimationType: 'none',
  bgOpacity: 1,
  wheelToZoom: true,
  pswpModule: () => import('photoswipe')
})

window.lightbox = lightbox
