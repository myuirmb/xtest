<style lang="scss" scoped>
</style>

<template>
  <div id="message">
    message
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "message",
  computed: {
    ...mapState(["active"])
  },
  created() {
    if (this.active !== "message") this.setActive({ active: "message" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>