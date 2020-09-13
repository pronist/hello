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
  $bottom = 20px
  $right = 20px

  #__theme-btn
    #theme__input
      display none
    label
      position fixed
      right $right + $size + 12px
      bottom $bottom
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
      z-index 9996
      .mode-text
        margin-left 8px
      &:hover
        background-color alpha(black, .9)
        color alpha(white, .9)
      @media screen and (max-width: 1600px)
        border-radius 50%
        padding 0
        width $size
        height $size
        bottom 15px
        right $right + $size + 12px - 5px
        line-height 35px
        text-align center
        .mode-text
          display none
</style>

<style lang="stylus">
  html[data-theme='dark']
    #__theme-btn
      label
        border #353638
        background-color #353638
        color alpha(white, .9)
        box-shadow none
        &:hover
          background-color #53575c
</style>
