<style lang="less" scoped>
</style>

<template>
  <div id="message">message</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "message",
  created() {
    if (this.$store.state.menus.active !== "message")
      this.setActive({ active: "message" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>