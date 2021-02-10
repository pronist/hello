module.exports = class {
  /**
   * Media contents alignment
   *
   * Options:
   *
   * imageSlideBlock: boolean,
   * imageBlock: boolean
   * imageGridBlock: boolean
   *
   * @param {object} options
   */
  static alignImageCenter (options) {
    const alignImage = function (width) {
      width = width > 1100 ? 1100 : width
      $(this).css({ width, 'max-width': 'none', 'margin-left': `calc((100% - ${width}px) / 2)` })
    }

    if (options.imageSlideBlock) {
      $('figure.imageslideblock.alignCenter').each(function () {
        alignImage.call(this, $(this).find('.image-wrap.selected > img').data('origin-width'))
      })
    }
    if (options.imageBlock) {
      $('figure.imageblock.alignCenter').each(function () {
        alignImage.call(this, $(this).data('origin-width') || $(this).attr('width') || $(this).width())
      })
    }
    if (options.imageGridBlock) {
      $('figure.imagegridblock').each(function () {
        alignImage.call(this, 1100)
      })
    }
  }

  /**
   * Add 'a' tag into headings
   *
   * @param {string} container
   * @param {string} headings
   */
  static headings (container, headings) {
    $(container).find(headings).each(function () {
      const $heading = $(this)
      const anchor = encodeURIComponent($heading.text()).replace(/[0-9-_.!~*'()\s]/g, '-')
      const $a = $('<a></a>').attr('href', '#' + anchor).text($heading.text())
      const htmlContent = $heading.html()

      $a.html(htmlContent)
      $heading.attr('id', anchor).empty().append($a)
    })
  }

  /**
   * Create a Scrollspy
   *
   * Options:
   *
   * context: string - a Container that contains headings
   * spy: string - Scrollspy
   * headings: string - Heading Tags that will be extracted
   *
   * @param {object} options
   */
  static scrollspy (options) {
    /**
     * Extract Headings from target
     *
     * @param {string} headings
     */
    const extractHeadings = ($context, headings) => {
      return $context.find(headings).get().reduce((spies, heading) => {
        const $heading = $(heading)
        const anchor = $heading.find('a').attr('href')
        spies.push({ href: anchor, label: $heading.text(), tag: $heading.prop('tagName').toLowerCase() })
        return spies
      }, [])
    }
    const $spy = $(options.spy)
    const $context = $(options.context)

    extractHeadings($context, options.headings).forEach(spy => {
      const $a = $('<a></a>')
        .text(spy.label)
        .attr({ href: spy.href, 'data-tag': spy.tag })

      $spy.append($('<li></li>').append($a))
    })
  }

  /**
   * Notification
   *
   * @param {string} notify
   * @param {string} pos
   * @param {number} timeout
   */
  static notify (notify, pos, timeout) {
    const $notify = $(notify)

    if ($notify.length > 0) {
      const $thumbnail = $notify.find('.thumbnail')

      if ($thumbnail.children('img[src$="img_relation.png"]').length > 0) {
        $thumbnail.remove()
      }
      UIkit.notification($notify.get(0).outerHTML, { pos, timeout })
      $notify.remove()
    }
  }
}
