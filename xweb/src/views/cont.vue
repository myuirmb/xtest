<style lang="scss" scoped>
.mintui {
  font-size: 24px;
}
</style>

<template>
  <div id="cont">
    <div>
      <router-view />
    </div>
    <mm />
  </div>
</template>

<script>
import mm from "../components/MainMenu.vue";

export default {
  name: "cont",
  components: {
    mm
  }
};
</script>


