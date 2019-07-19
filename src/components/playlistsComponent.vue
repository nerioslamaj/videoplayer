<template>
  <div class="playlistComponent">
    <h1>Playlists</h1>
    <ul>
      <li v-for="(item, index) in allPlaylists" v-bind:key="index">
        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'playlistComponent',
  props: {
    allPlaylists: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.playlistComponent {
  background-color: $black;
  width: 20vw;
  height: 100%;
  padding: 30px 20px;
}
</style>
