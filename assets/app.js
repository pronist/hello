/** app.js
  *
  * Entry for bundling by webpack.
  * for example, if you have your own script, or plguin,
  * you can import that.
  * ex) import "./bower_components/animate.css/animate.min.css"
  *
  * you are able to include js, css
  * if you want to contain other scripts like .ts, .less, .sass,
  * set the loaders in tidory.config.js
  *
  * after import assets it will be contained in app.js
  */

import $ from 'jquery'
import _ from 'lodash'
import hljs from 'highlight.js'

import readmore from './lib/readmore'
import table from './lib/table'
import scrollSpy from './lib/scrollSpy'

import '@fortawesome/fontawesome-free/js/all.min'
import '@fortawesome/fontawesome-free/css/all.min.css'

$(document).ready(() => {
  switch ($('body').attr('id')) {
    case 'tt-body-index':
      return $(document).on('scroll', _.throttle(() => {
        let page = 1
        const pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height()
        if (pixelsFromWindowBottomToBottom < 200) {
          readmore(++page)
        }
      }, 500))
    case 'tt-body-page':
      hljs.initHighlightingOnLoad()
      table()
      return scrollSpy('#spy')
  }
})
