<template>
  <div class="videoViewComponent">
    <video controls>
      <source v-bind:src="videoUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'videoViewComponent',
  props: {
    videoUrl: String
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
