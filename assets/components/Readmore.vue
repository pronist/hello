<template lang="pug">
#readmore(v-infinite-scroll="readmore")
</template>

<script>
import _ from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      page: 0
    }
  },
  methods: {
    async readmore () {
      const container = document.getElementById('main')
      const app = document.querySelector('#main > #app')
      const posts = await axios.get('/', { params: { page: ++this.page } }).then(({ data }) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        return doc.querySelectorAll('#main > .post')
      })
      _.each(posts, post => container.insertBefore(post, app))
    }
  }
}
</script>
