<template lang="pug">
  #spy
    ul(class="uk-nav uk-nav-default")
      li(v-for="spy in spies")
        a(:href="spy.href") {{ spy.label }}
</template>

<script>
export default {
  props: {
    context: String
  },
  computed: {
    spies () {
      return $(this.context).find('h2').get().reduce((spies, heading) => {
        const $heading = $(heading)
        const anchor = encodeURIComponent($heading.text())
        spies.push({ href: '#' + anchor, label: $heading.text() })
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
  $width = 200px
  $top = 160px
  $right = -940px

  #spy
    position relative
    right $right
    @media screen and (max-width: 1680px)
      display none
    ul
      list-style none
      text-align left
      position fixed
      top $top
      width $width
      font-weight 500
      .uk-active
        a
          transition-duration .5s
          color black
</style>
