<style lang="scss" scoped>
</style>

<template>
  <div id="lifes">
    lifes
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "lifes",
  computed: {
    ...mapState(["active"])
  },
  created() {
    if (this.active !== "lifes") this.setActive({ active: "lifes" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>