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
import hljs from 'highlight.js'

import InfiniteScroll from './lib/infiniteScroll'
import table from './lib/table'
import scrollSpy from './lib/scrollSpy'

$(document).ready(() => {
  switch ($('body').attr('id')) {
    case 'tt-body-index':
      return InfiniteScroll()
    case 'tt-body-page':
      hljs.initHighlightingOnLoad()
      table()
      return scrollSpy('#spy')
  }
})
