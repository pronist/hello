import $ from 'jquery'
import UIkit from 'uikit'

/**
 * Scrollspy
 *
 * @param {string} selector
 */
export default selector => {
  $.each($('h2'), (idx, item) => {
    const text = encodeURIComponent($(item).text())
    $(item).attr('id', text)

    const a = $('<a></a>').attr('href', `#${text}`).text($(item).text())
    const li = $('<li></li>').append(a)

    $(selector).find('ul').eq(0).append(li)
  })
  UIkit.scrollspyNav(selector, { closest: 'li' })
}
