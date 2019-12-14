<style lang="less" scoped>
</style>

<template>
  <div id="lifes">lifes</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "lifes",
  created() {
    this.setShowMenus({ menus: "MainMenu" });
    if (this.$store.state.menus.active !== "lifes")
      this.setActive({ active: "lifes" });
  },
  methods: {
    ...mapMutations(["setActive", "setShowMenus"])
  }
};
</script>