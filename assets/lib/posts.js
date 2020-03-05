import axios from 'axios'

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

  return list
})
