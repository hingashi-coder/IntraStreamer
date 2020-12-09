<template>
    <div>
      <video ref="videoPlayer" class="video-js"></video>
      <p>{{msg}}</p>
    </div>
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
    return {
      player: null
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', this)
    })
    this.player.on('error', () => {
      console.log(this.player.error().code)
      switch (this.player.error().code) {
        case 2:
          this.msg = '配信を開始してください'
          console.log(this.msg)
          break
        default:
          this.msg = '不明なエラーです。'
      }
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
