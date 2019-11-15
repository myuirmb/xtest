<style lang="less" scoped>
</style>

<template>
  <div id="home">home</div>
</template>

<script>
import { mapMutations,mapActions } from "vuex";

export default {
  name: "home",
  created() {
    if (this.$store.state.menus.active !== "home")
      this.setActive({ active: "home" });
  },
  mounted() {
    this.getHomeUserList();
  },
  methods: {
    ...mapMutations(["setActive"]),
    ...mapActions(['getHomeUserList'])
  }
};
</script>