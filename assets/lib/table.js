import $ from 'jquery'

/**
 * Table style
 */
export default () => $.each($('table'), (idx, table) => {
  $(table).attr('class', 'uk-table uk-table-divider')

  const thead = $('<thead></thead>')
  const headings = $(table).find('tbody > tr').eq(0)
  const tr = $('<tr></tr>')

  $.each(headings.children('td'), (idx, td) => {
    if (td instanceof HTMLElement) {
      const th = $('<th></th>').text($(td).text())
      tr.append(th)
    }
  })
  $(thead).append(tr)
  $(thead).insertBefore($(table).children('tbody'))

  headings.remove()
})
