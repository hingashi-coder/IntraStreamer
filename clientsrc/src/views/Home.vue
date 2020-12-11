<template>
  <v-app>
    <v-app-bar dark color="primary">
      <v-toolbar-title>Live配信</v-toolbar-title>
    </v-app-bar>
    <v-spacer />
    <video-player :options="videoOptions"/>
  </v-app>
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
    console.log(this.videoOptions.sources)
  }
}
</script>
