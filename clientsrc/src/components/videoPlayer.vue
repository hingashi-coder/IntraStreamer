<template>
  <v-app>
    <div
      :style="{
        width: `${this.w}px`,
        height: `${this.h}px`
      }"
      style="background:green; margin:0 auto"
      v-if="show"
    >
      <video ref="videoPlayer" class="video-js vjs-16-9"></video>
    </div>
    <p v-if="!show">{{msg}}</p>
  </v-app>
</template>

<script>
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    const width = window.innerWidth
    const height = window.innerHeight
    return {
      player: null,
      w: Math.min(1.7777778 * height, width),
      h: Math.min(0.5625 * width, height),
      show: true
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
    this.player.on('error', () => {
      console.log(this.player.error().code)
      this.show = false
      switch (this.player.error().code) {
        case 2:
          this.msg = '配信が開始されていません。時間をおいてから再接続してみてください。'
          console.log(this.msg)
          break
        default:
          this.msg = '不明なエラーです'
      }
    })
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      const height = window.innerHeight
      this.w = Math.min(1.7777778 * height, width)
      this.h = Math.min(0.5625 * width, height)
      console.log(this.w, this.h)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
