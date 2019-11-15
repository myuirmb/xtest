<style lang="less" scoped>
</style>

<template>
  <div id="contact">contact</div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "contact",
  created() {
    if (this.$store.state.menus.active !== "contact")
      this.setActive({ active: "contact" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>