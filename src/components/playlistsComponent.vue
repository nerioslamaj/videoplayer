<template>
  <div class="playlistComponent">
    <div class="blockTitle">
      <h1>Playlists</h1>
      <i class="zmdi zmdi-plus round"></i>
    </div>
    <ul>
      <li v-on:click="switchPlaylist(index)" v-for="(item, index) in allPlaylists" v-bind:key="index"  v-bind:class="{ activePlaylist: item == currentPlaylist }">
        <h4>{{ item }}</h4>
        <p>Playlist {{ index + 1 }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'playlistComponent',
  props: {
    allPlaylists: Array
  },
  computed: {
    currentPlaylist () {
      return this.$store.state.currentPlaylist
    }
  },
  methods: {
    switchPlaylist(index) {
      this.$store.dispatch('switchPlaylist', index).catch(err => {
        this.error = err
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../global.scss";

.playlistComponent {
  background-color: $dark;
  width: 25vw;
  height: 100%;
  padding: 30px 20px;
  ul {
    li {
      position: relative;
      padding: 32px 24px;
      margin-bottom: 16px;
      background-color: $gray1;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        transition: all 0.3s;
        background-color: $gray2;
      }
      h4 {
        margin: 0;
        color: $gray4;
        transition: all 0.3s;
      }
      p {
        color: $gray3;
        transition: all 0.3s;
      }
      &.activePlaylist {
        background-color: $light;
        &:hover {
          background-color: $light;
        }
        h4 {
          color: $gray3;
          transition: all 0.3s;
        }
        p {
          color: $gray4;
          transition: all 0.3s;
        }
      }
    }
  }
}
</style>
