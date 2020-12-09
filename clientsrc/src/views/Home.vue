<template>
  <div>
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from '@/components/videoPlayer.vue'
import 'video.js/dist/video-js.css'

export default {
  name: 'VideoExample',
  components: {
    VideoPlayer
  },
  data () {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        height: 600,
        width: 1000,
        sources: [
          {
            src: `http://${document.domain}:8080/${this.$route.params.key}.m3u8`,
            type: 'application/x-mpegURL'
          },
          {
            src: `rtmp://${document.domain}:1935/live/${this.$route.params.key}`,
            type: 'rtmp/mp4'
          }
        ]
      }
    }
  },
  mounted () {
    console.log(this.videoOptions.sources[0])
  }
}
</script>
