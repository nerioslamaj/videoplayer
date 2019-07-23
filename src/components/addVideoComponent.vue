<template>
  <div v-if="showVideoPopup">
    <div class="blackBackground" v-on:click="$emit('update:showVideoPopup', false)"></div>
    <div class="addVideoComponent">
      <h4>New Video</h4>
      <form ref="videoInput" v-on:submit.prevent="addNewVideo">
        <input type="text" placeholder="Video Title">
        <input type="text" placeholder="Video Artist">
        <input type="text" placeholder="Video URL">
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addVideoComponent',
  props: {
    showVideoPopup: Boolean
  },
  methods: {
    addNewVideo() {
      this.$store.dispatch('addNewVideo', {
        title: this.$refs.videoInput[0].value,
        artist: this.$refs.videoInput[1].value,
        url: this.$refs.videoInput[2].value
      }).catch(err => {
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
.addVideoComponent {
  width: 220px;
  background-color: $gray3;
  z-index: 2;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  form {
    input {
      width: 100%;
      display: block;
      margin-bottom: 12px;
    }
    button {
      width: 100%;
      display: block;
    }
  }
}
</style>
