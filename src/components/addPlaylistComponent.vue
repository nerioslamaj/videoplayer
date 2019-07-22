<template>
  <div v-if="showPlaylistPopup">
    <div class="blackBackground" v-on:click="$emit('update:showPlaylistPopup', false)"></div>
    <div class="addPlaylistComponent">
      <h4>New Playlist</h4>
      <form ref="playlistInput" v-on:submit.prevent="addNewPlaylist">
        <input type="text" placeholder="Playlist Name">
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addPlaylistComponent',
  props: {
    showPlaylistPopup: Boolean
  },
  methods: {
    addNewPlaylist() {
      this.$store.dispatch('addNewPlaylist', this.$refs.playlistInput[0].value).catch(err => {
        this.error = err
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.blackBackground {
  background-color: rgba(0,0,0,0.9);
  z-index: 1;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.addPlaylistComponent {
  background-color: $gray3;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
}
</style>
