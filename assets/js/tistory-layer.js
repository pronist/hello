module.exports = class {
  /**
   * Tistory Layer Tooltip
   *
   * @param {Object} messages
   */
  static tooltip (messages, isPermalink) {
    const $layerTooltip = $('.layer_tooltip')
    const $tooltip = $layerTooltip.children('.inner_layer_tooltip')
    const $reaction = $('.container_postbtn .postbtn_like .wrap_btn[id^=reaction-]')

    if (isPermalink && $reaction.length) {
      setTimeout(() => {
        $layerTooltip.children('.inner_layer_tooltip').text(messages.Request)
        $layerTooltip.fadeIn(500)
      }, 5000)

      setTimeout(() => $layerTooltip.fadeOut(500), 10000)

      $reaction.click(function () {
        const tooltip = $(this).find('.btn_post > .uoc-icon').hasClass('like_on')
          ? messages.Unheart
          : messages.Heart

        $tooltip.text(tooltip)

        $layerTooltip.fadeIn(500)
        setTimeout(() => $layerTooltip.fadeOut(500), 3000)
      })
    }

    $('.btn_menu_toolbar.btn_subscription').click(function () {
      const tooltip = $(this).hasClass('following')
        ? messages.Unsubscribe
        : messages.Subscribe

      $tooltip.text(tooltip)
    })

    $('#tistorySnsLayer .btn_mark[data-service=url]').click(() => {
      $tooltip.text(messages.Url)
    })
  }

  /**
   * Tistory Toolbar Layer
   *
   * @param {string} tistory
   * @param {string} subscription
   */
  static toolbar (options) {
    // Subscription
    $('.menu_toolbar > div[class=btn_tool]').appendTo(options.subscription)

    $(options.subscription)
      .find('div[class=btn_tool] > .btn_menu_toolbar.btn_subscription')
      .append('<i class="fa fa-star"></i>')

    // Tistory
    $('.menu_toolbar > #menubar_wrapper > .header_layer').appendTo(options.tistory)
  }

  /**
   * Tistory Layers
   *
   * @param {string} postButton
   */
  static postButtons (postButton) {
    // Trigger 'click' event for TistoryEtcLayer Display
    $('.container_postbtn .wrap_btn_etc > button').trigger('click')

    // Trigger 'click' event for correct running share buttons
    $('#tistorySnsLayer > .bundle_post > a').click(() => {
      $('.container_postbtn .postbtn_like > .wrap_btn_share > button.btn_share').trigger('click')
    })

    // Move into
    $('#tistoryEtcLayer, #tistorySnsLayer').appendTo(postButton)
  }
}
