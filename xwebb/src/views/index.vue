<style lang="less" scoped>
.footer {
  height: 50px;
  width: 100%;
  background-color: #f3f3f3;
}
</style>

<template>
  <div id="index">
    <div>
      <router-view />
      <!-- <div class="footer" v-if="ftshow"></div> -->
    </div>
    <main-menu v-if="mmshow" />
    <user-menu v-if="umshow" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MainMenu from "../components/menu/MainMenu.vue";
import UserMenu from "../components/menu/UserMenu.vue";

export default {
  name: "index",
  components: {
    [MainMenu.name]: MainMenu,
    [UserMenu.name]: UserMenu
  },
  computed: {
    // ...mapState(["mmshow", "umshow"]),
    ...mapState({
      mmshow: state => state.menus.mmshow,
      umshow: state => state.menus.umshow,
      ftshow: state => state.menus.mmshow || state.menus.umshow
    })
  }
};
</script>


