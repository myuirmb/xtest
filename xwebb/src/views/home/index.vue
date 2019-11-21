<style lang="less" scoped>
</style>

<template>
  <div id="home">
    <home-user-list
      v-for="item in homelist"
      :uid="item.uid"
      photo="https://img.yzcdn.cn/vant/cat.jpeg"
      :nickname="item.nickname"
      :gender="item.gender"
      :age="item.age"
      :height="item.height"
      :conste="item.conste"
      :zodiac="item.zodiac"
      :maxim="item.maxim"
      :salary="item.salary"
      :online="item.online"
      :distance="item.distance"
      :vip="item.vip"
      :key="item.uid"
    /><!-- @click="jumpUserInfo" -->
  </div>
</template>

<script>
import HomeUserList from "../../components/item/HomeUserList.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    [HomeUserList.name]: HomeUserList
  },
  computed: {
    ...mapState({ homelist: state => state.userlist.homelist })
  },
  created() {
    this.setShowMenus({ menus: "MainMenu" });
    if (this.$store.state.menus.active !== "home")
      this.setActive({ active: "home" });
  },
  mounted() {
    // this.getHomeUserList();
    // console.log(this.homelist);
  },
  methods: {
    ...mapMutations(["setActive", "setShowMenus"]),
    ...mapActions(["getHomeUserList"]),
    jumpUserInfo() {
      console.log(arguments,"abcll");
    }
  }
};
</script>