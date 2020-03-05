import $ from 'jquery'
import _ from 'lodash'

import posts from './posts'

/**
 * Infinite Scroll
 */
export default async () => {
  let page = 1
  let list = await posts(page)

  return $(document).on('scroll', _.throttle(async () => {
    const pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height()
    if (pixelsFromWindowBottomToBottom < 200 && list.length > 0) {
      list = await posts(++page)
      _.each(list, item => $('#main').append($(item)))
    }
  }, 500))
}
