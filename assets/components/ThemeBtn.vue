<template lang="pug">
  #__theme-btn
    input#theme__input(type='checkbox' v-model='checked')
    label(for='theme__input')
      i(aria-hidden='true' ref='icon' :class=`checked ? 'fa fa-sun-o' : 'fa fa-moon-o'`)
      span.mode-text(ref='modeText') {{ checked ? '라이트 모드로 보기' : '다크 모드로 보기' }}
</template>

<script>
export default {
  data () {
    return {
      checked: $('html').attr('data-theme') === 'dark'
    }
  },
  watch: {
    checked () {
      const TTDARK = $('html').attr('data-theme') === 'dark' ? 'N' : 'Y'
      localStorage.TTDARK = TTDARK

      $('html').attr('data-theme', localStorage.TTDARK === 'N' ? 'light' : 'dark')
    }
  }
}
</script>

<style lang="stylus">
  $size = 35px

  #__theme-btn
    #theme__input
      display none
    label
      position fixed
      right 20px + $size + 12px
      bottom 50px
      border-radius 25px
      font-size .8rem
      padding 8px 18px
      border none
      cursor pointer
      transition-duration .1s
      background-color white
      box-shadow 0 0 0 1px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1)
      color alpha(black, .8)
      font-weight 500
      z-index 9999
      .mode-text
        margin-left 8px
      &:hover
        background-color #292a2d
        color alpha(white, .9)
      @media screen and (max-width: 1200px)
        border-radius 50%
        padding 0
        width $size
        height $size
        line-height 35px
        text-align center
        .mode-text
          display none
</style>

<style lang="stylus">
  html[data-theme='dark']
    #__theme-btn
      label
        border #292a2d
        background-color #292a2d
        color alpha(white, .9)
        box-shadow none
        z-index 9999
        &:hover
          background-color #353638
</style>
