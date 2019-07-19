<template>
  <div class="videoListComponent">
    <h1>Videos</h1>
    <p>
      For a guide and recipes on how to configure / customize this project, check out this
    </p>
    <ul>
      <li v-for="(item, index) in allVideos" v-bind:key="index">
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
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.videoListComponent {
  width: 80vw;
  height: 100%;
  background-color: $dark;
  padding: 30px 20px;
}
</style>
