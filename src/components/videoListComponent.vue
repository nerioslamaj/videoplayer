<template>
  <div class="videoListComponent">
    <addVideoComponent v-bind:showVideoPopup.sync="showPopup"></addVideoComponent>
    <div class="blockTitle">
      <h1>Videos</h1>
      <i v-on:click="revertPopup" class="zmdi zmdi-plus round"></i>
    </div>
    <ul v-if="allVideos.length">
      <li v-on:click="switchVideo(item.id)" v-for="(item, index) in allVideos" v-bind:key="index" v-bind:class="{ activeVideo: currentVideoId == item.id }">
        <i class="zmdi zmdi-play"></i>
        <span>{{ item.title }}</span>
        <span>{{ item.artist }}</span>
        <span>{{ item.playlist }}</span>
      </li>
    </ul>
    <h3 v-if="!allVideos.length">No videos found in "{{currentPlaylistName}}" playlist.</h3>
  </div>
</template>

<script>
import addVideoComponent from './addVideoComponent.vue'

export default {
  name: 'videoListComponent',
  components: {
    addVideoComponent
  },
  data() {
    return {
      showPopup: false
    }
  },
  props: {
    allVideos: Array
  },
  computed: {
    currentVideoId () {
      return this.$store.state.currentVideoId;
    },
    currentPlaylistName () {
      return this.$store.state.currentPlaylist;
    }
  },
  methods: {
    switchVideo(id) {
      this.$store.dispatch('switchVideo', id).catch(err => {
        this.error = err
      })
    },
    revertPopup () {
      this.showPopup = true;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.videoListComponent {
  width: 75vw;
  height: 100%;
  background-color: $gray1;
  padding: 30px;
  ul {
    width: 100%;
    li {
      padding: 10px 4px;
      border-bottom: 1px solid $gray2;
      cursor: pointer;
      &:hover {
        background-color: $gray2;
        i {
          visibility: visible;
        }
      }
      &.activeVideo {
        background-color: $gray2;
        i {
          visibility: visible;
        }
      }
      i {
        width: 4%;
        text-align: center;
        font-size: 20px;
        color: $light;
        visibility: hidden;
        transition: transform 0.1s;
        &:hover {
          transform: scale(1.15);
          transition: transform 0.1s;
        }
      }
      span {
        display: inline-block;
        color: $light;
        width: 32%;
      }
    }
  }
  h3 {
    color: $gray3;
    text-align: center;
    margin-top: 100px;
  }
}
</style>
