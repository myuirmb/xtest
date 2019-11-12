<style lang="scss" scoped>
</style>

<template>
  <div id="my">
    my
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "my",
  computed: {
    ...mapState(["active"])
  },
  created() {
    if (this.active !== "my") this.setActive({ active: "my" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>