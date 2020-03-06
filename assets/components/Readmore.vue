<template lang="pug">
#readmore(v-infinite-scroll="readmore" infinite-scroll-disabled="isScrolled" infinite-scroll-throttle-delay="500")
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      isScrolled: false,
      page: 1,
      length: document.querySelectorAll('.post').length
    }
  },
  methods: {
    async readmore () {
      if (this.length > 0) {
        this.isScrolled = true

        this.length = (await this.append()).length
        this.isScrolled = false
      }
    },
    async append () {
      const container = document.getElementById('main')
      const app = document.getElementById('app')

      const posts = await axios.get(window.location.pathname, { params: { page: ++this.page } }).then(({ data }) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        return doc.querySelectorAll('.post')
      })
      _.each(posts, post => container.insertBefore(post, app))

      return posts
    }
  }
}
</script>
