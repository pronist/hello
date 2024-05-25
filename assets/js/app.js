/** app.css
 *
 * Entry for bundling by webpack.
 * for example, if you have your own script, or plguin,
 * you can import that.
 * ex) import "./bower_components/animate.css/animate.min.css"
 *
 * you are able to include css, css
 * if you want to contain other scripts like .ts, .less, .sass,
 * set the loaders in tidory.config.css
 *
 * after import assets it will be contained in app.css
 */

/** @see https://alpinejs.dev */
import Alpine from 'alpinejs'

/** @see https://alpinejs.dev/plugins/intersect */
import intersect from '@alpinejs/intersect'

Alpine.plugin(intersect)

/** @see https://alpinejs.dev/plugins/collapse */
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

window.Alpine = Alpine
