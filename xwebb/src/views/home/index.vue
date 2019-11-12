<style lang="scss" scoped>
</style>

<template>
  <div id="home">
    home
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["active"])
  },
  created() {
    if (this.active !== "home") this.setActive({ active: "home" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>