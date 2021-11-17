module.exports = class {
  /**
   * Set foldable category
   */
  static foldableCategory () {
    UIkit.accordion('.tt_category .category_list', {
      content: '> .sub_category_list',
      targets: '> .foldable',
      toggle: '> .link_item',
      multiple: true
    })

    const $subCategory = $('.tt_category .sub_category_list')

    if ($subCategory.length) {
      $subCategory.prev('.link_item').append('<i class="fas fa-chevron-down"></i>')
      $subCategory.parent().addClass('foldable')
    }
  }
}
