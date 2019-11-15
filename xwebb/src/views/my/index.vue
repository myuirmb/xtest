<style lang="less" scoped>
</style>

<template>
  <div id="my">my</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "my",
  created() {
    if (this.$store.state.menus.active !== "my")
      this.setActive({ active: "my" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>