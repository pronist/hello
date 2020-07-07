<template lang="pug">
  #blogger
    a.thumbnail(href="/"): img(:src="thumbnail" width="100" height="100")
    .title {{ title }}
    .blogger {{ blogger }}
    .description {{ description }}
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    blogger: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
  $maxWidth = 450px

  #blogger
    text-align center
    max-width $maxWidth
    margin 0 auto
    margin-bottom 70px
    img
      border-radius 50%
    .title
      color alpha(black, .9)
      font-size 1.15rem
      margin-top 18px
      margin-bottom 3px
    .blogger
      margin-bottom 15px
      font-size .88rem
      color alpha(black, .5)
    .description
      color alpha(black, .4)
      font-size .92rem
      line-height 1.8em
</style>
