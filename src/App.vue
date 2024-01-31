<template>
  <div id="app" class="app-container">app-container</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted() {
    axios.get('/api/get/file/details').then((res) => {
      console.log(res);
    });
  },
};
</script>

<style lang="less">
.app-container {
  color: @myColor;
}
</style>
