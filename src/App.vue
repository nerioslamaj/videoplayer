<template>
  <div id="app">
    <videoViewComponent v-bind:key="currentVideo.video.id" v-bind:currentVideoIndex="currentVideo.index" v-bind:videoToBePlayed="currentVideo.video"></videoViewComponent>
    <div class="listContainer">
      <playlistsComponent v-bind:allPlaylists="playlists"></playlistsComponent>
      <videoListComponent v-bind:allVideos="videos"></videoListComponent>
    </div>
  </div>
</template>

<script>
import videoViewComponent from './components/videoViewComponent.vue'
import videoListComponent from './components/videoListComponent.vue'
import playlistsComponent from './components/playlistsComponent.vue'

export default {
  name: 'app',
  components: {
    videoViewComponent,
    videoListComponent,
    playlistsComponent,
  },
  computed: {
    videos () {
      let changedPlaylist = this.$store.state.currentPlaylist;
      return this.$store.state.videos.filter(x => {
        return changedPlaylist == x.playlist;
      });
    },
    playlists () {
      return this.$store.state.playlists
    },
    currentVideo () {
      let currentVideoId = this.$store.state.currentVideoId;
      let currentVideoIndex= null;
      return {video: this.$store.state.videos.find((x, i) => {
        currentVideoIndex = i;
        return currentVideoId == x.id;
      }), index: currentVideoIndex}
    }
  }
}
</script>

<style lang="scss">
@import "global.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  .listContainer {
    display: flex;
    justify-content: flex-start;
    height: 80vh;
  }
}
</style>
