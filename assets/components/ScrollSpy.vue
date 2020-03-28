<template lang="pug">
  #spy
    ul(class="uk-nav uk-nav-default" ref="nav")
      li(v-for="spy in spies"): a(:href="spy.href") {{ spy.label }}
</template>

<script>
import _ from 'lodash'

export default {
  computed: {
    spies () {
      return _.reduce(document.querySelectorAll('#post h2'), (spies, heading) => {
        const anchor = encodeURIComponent(heading.textContent)
        heading.setAttribute('id', anchor)
        spies.push({ href: '#' + anchor, label: heading.textContent })
        return spies
      }, [])
    }
  },
  mounted () {
    UIkit.scrollspyNav('#spy', { closest: 'li' })
  }
}
</script>

<style lang="stylus">
  @media screen and (min-width: 1178px)
    #spy
      position relative
      right -670px
  @media screen and (max-width: 1178px)
    #spy
      display none
  #spy
    ul
      list-style none
      text-align left
      position fixed
      top 160px
      width 200px
      font-weight 500
      .uk-active
        a
          transition-duration .5s
          color black
</style>
