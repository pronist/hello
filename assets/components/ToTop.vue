<template lang="pug">
a#__toTop(href='#' uk-scroll='target: #__hELLO')
  i(class='fa fa-chevron-up')
</template>

<script>
export default {
  /* empty */
}
</script>

<style lang="stylus">
  $size = 35px
  $bottom = 48px
  $right = 20px

  #__toTop
    position fixed
    right $right
    bottom $bottom
    border-radius 25px
    border none
    cursor pointer
    transition-duration .1s
    background-color white
    box-shadow 0 0 0 1px rgba(0, 0, 0, .1), 0 2px 5px rgba(0, 0, 0, .1)
    color alpha(black, .8)
    width $size
    height $size
    line-height $size
    text-align center
    border-radius 50%
    font-size .9rem
    z-index 9999
    &:hover
      background-color #292a2d
      color alpha(white, .9)
    @media screen and (max-width: 1600px)
      bottom 20px
</style>

<style lang="stylus">
  html[data-theme='dark']
    #__toTop
      border #333638
      background-color #333638
      color alpha(white, .9)
      box-shadow none
      &:hover
        background-color #53575c
</style>
