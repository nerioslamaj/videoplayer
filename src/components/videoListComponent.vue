<template>
  <div class="videoListComponent">
    <div class="blockTitle">
      <h1>Videos</h1>
      <i class="zmdi zmdi-plus round"></i>
    </div>
    <ul>
      <li v-on:click="switchVideo(item.id)" v-for="(item, index) in allVideos" v-bind:key="index">
        <i class="zmdi zmdi-play"></i>
        <span>{{ item.title }}</span>
        <span>{{ item.artist }}</span>
        <span>{{ item.playlist }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'videoListComponent',
  props: {
    allVideos: Array
  },
  computed: {
    currentVideo () {
      return this.$store.state.videos.find(x => {
        return this.$store.state.currentVideoId == x.id;
      });
    }
  },
  methods: {
    switchVideo(id) {
      this.$store.dispatch('switchVideo', id).catch(err => {
        this.error = err
      })
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
}
</style>
