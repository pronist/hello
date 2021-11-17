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

const Layout = require('./js/layout')
const List = require('./js/list')
const Permalink = require('./js/permalink')
const Sidebar = require('./js/Sidebar')
const Theme = require('./js/theme')
const TistoryLayer = require('./js/tistory-layer')
const Utils = require('./js/utils')

window.h = {
  Layout,
  List,
  Permalink,
  Sidebar,
  Theme,
  TistoryLayer,
  Utils
}
