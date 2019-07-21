<template>
  <div class="videoViewComponent">
    <video id="videoPlayer" controls>
      <source v-bind:src="videoToBePlayed.url" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'videoViewComponent',
  props: {
    videoToBePlayed: Object,
    currentVideoIndex: Number
  },
  mounted() {
    const video = document.getElementById('videoPlayer');
    let playPromise = video.play();
    let allVideos = this.$store.state.videos
    let currentVideoIndex = this.currentVideoIndex
    let videoToBePlayed = this.videoToBePlayed

    if(playPromise !== undefined) {
      playPromise.catch(error => {
        console.log(error)
      });
    }

    video.onended = function() {
      let nextVideo;

      for(let i=currentVideoIndex+1; i<allVideos.length; i++) {
        if(videoToBePlayed.playlist == allVideos[i].playlist) {
          nextVideo = allVideos[i];
          break;
        }
      }

      if(!nextVideo) {
        for(let i=0; i<=currentVideoIndex; i++) {
          if(videoToBePlayed.playlist == allVideos[i].playlist) {
            nextVideo = allVideos[i];
            break;
          }
        }
      }
      change(nextVideo.id);
    };
    const change = (id) => {
      this.changeVideo(id);
    }
  },
  methods: {
    changeVideo(id) {
      this.$store.state.currentVideoId = id;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.videoViewComponent {
  background-color: $black;
  height: 480px;
  text-align: center;
  video {
    height: 100%;
  }
}
</style>
