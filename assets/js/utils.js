module.exports = class {
  /**
   * Remove TextNode
   *
   * @param {string} selector
   */
  static removeTextNode (selector) {
    $(selector).contents().filter(function () {
      return this.nodeType === 3
    }).remove()
  }
}
