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
require('lazysizes')

const Theme = require('./js/Theme')
const Permalink = require('./js/Post/Permalink')
const Mode = require('./js/Post/Mode')

window.h = {
  Theme, Post: { Mode, Permalink }
}
