<style lang="scss" scoped>
</style>

<template>
  <div id="contact">contact</div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "contact",
  computed: {
    ...mapState(["active"])
  },
  created() {
    if (this.active !== "contact") this.setActive({ active: "contact" });
  },
  methods: {
    ...mapMutations(["setActive"])
  }
};
</script>