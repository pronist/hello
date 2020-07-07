<template lang="pug">
  #infinite-scroll(v-infinite-scroll="infiniteScroll" infinite-scroll-disabled="isScrolled" infinite-scroll-throttle-delay="500")
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      isScrolled: false,
      page: 1,
      container: document.querySelector('#text'),
      length: document.querySelectorAll('.post').length
    }
  },
  methods: {
    async infiniteScroll () {
      if (this.length > 0) {
        this.isScrolled = true

        this.length = (await this.append()).length
        this.isScrolled = false
      }
    },
    async append () {
      const posts = await axios.get(window.location.pathname, { params: { page: ++this.page } }).then(({ data }) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        return doc.querySelectorAll('.post')
      })
      _.each(posts, post => this.container.appendChild(post))

      return posts
    }
  }
}
</script>
