import axios from 'axios'
import _ from 'lodash'
import $ from 'jquery'

/**
 * Append posts in Index page
 *
 * @param {number} page
 *
 * @return {Promise}
 */
export default page => axios.get('/', { params: { page } }).then(({ data }) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(data, 'text/html')
  const list = doc.querySelectorAll('#main > .post')

  if (list.length > 0) {
    _.each(list, item => $('#main').append($(item)))
  }
})
