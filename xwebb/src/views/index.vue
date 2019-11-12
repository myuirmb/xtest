<style lang="scss" scoped>
.mintui {
  font-size: 24px;
}
</style>

<template>
  <div id="index">
    <div>
      <router-view />
    </div>
    <main-menu />
  </div>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";

export default {
  name: "index",
  components: {
    [MainMenu.name]: MainMenu
  }
};
</script>


