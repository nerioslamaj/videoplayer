<template>
  <div id="app">
    <videoViewComponent v-bind:videoUrl="selectedVideo"></videoViewComponent>
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
  data: function () {
    return {
      selectedVideo: null,
      selectedPlaylist: null,
      playlists: [ 'Cartoon', 'Music' ],
      videos: [
        {
          artist: 'Big Buck Bunny',
          title: 'In the woods',
          playlist: 'Cartoon',
          url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        },
        {
          artist: 'Big Buck Bunny',
          title: 'In the woods',
          playlist: 'Cartoon',
          url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        }
      ]
    }
  },
  mounted: function () {
    this.selectedVideo = this.videos[0].url;
    this.selectedPlaylist = null;
  },
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
