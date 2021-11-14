module.exports = class {
  /**
   * Set Category Fold
   */
  static setCategoryFold () {
    const $subCategory = $('.tt_category .sub_category_list')

    if ($subCategory.length) {
      $subCategory.prev('.link_item').append('<i class="fas fa-chevron-down"></i>')
      $subCategory.parent().addClass('openable')
    }

    UIkit.accordion('.tt_category .category_list', {
      targets: '> .openable',
      content: '> .sub_category_list',
      toggle: '> .link_item',
      multiple: true
    })
  }

  /**
   * Set sidebar toggle button
   *
   * @param {string} target
   * @param {string} sidebar
   * @param {string} mask
   * @param {string} width
   */
  static setToggleButton (target, sidebar, mask, width) {
    const $sidebar = $(sidebar)
    const $m = $(mask)

    $(target).on('click', () => {
      $sidebar.css('left', 0)
      $m.fadeIn(200)
    })
    $m.on('click', () => {
      $sidebar.css('left', `-${width}px`)
      $m.fadeOut(200)
    })
  }
}
