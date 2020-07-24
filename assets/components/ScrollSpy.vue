<template lang="pug">
  #__spy
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
    UIkit.scrollspyNav('#__spy', { closest: 'li' })
  }
}
</script>

<style lang="stylus">
  $width = 200px
  $top = 75px + 50px
  $right = -920px

  #__spy
    position relative
    right $right
    @media screen and (max-width: 1600px)
      display none
    ul
      list-style none
      text-align left
      position fixed
      width $width
      font-weight 500
      top $top
      z-index 9996
      .uk-active
        a
          transition-duration .5s
          color black
</style>

<style lang="stylus">
  html[data-theme='dark']
    #__spy
      ul
        .uk-active
          a
            color white
        li
          a
            color alpha(white, .8)
</style>
