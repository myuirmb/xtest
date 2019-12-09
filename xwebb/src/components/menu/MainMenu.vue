<style lang="less" scoped>
</style>

<template>
  <van-tabbar route v-model="active">
    <!--  @change="onChange" -->
    <!-- <div  style="width:50px;height:50px;background:red;"></div> -->
    <van-tabbar-item name="home" icon="wap-home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item
      name="contact"
      icon="friends-o"
      to="/contact"
      v-longTouch="()=>{this.changeShowStatus('contact')}"
    >联系人</van-tabbar-item>
    <van-tabbar-item name="message" icon="chat-o" to="/message" info>消息</van-tabbar-item>
    <van-tabbar-item name="lifes" icon="flower-o" to="/lifes">生活</van-tabbar-item>
    <van-tabbar-item name="my" icon="manager-o" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
import { mapMutations } from "vuex";
import longTouch from "./LongTouch.js";

export default {
  name: "MainMenu",
  directives: { longTouch },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      lifes_dot: false
    };
  },
  computed: {
    active: {
      get() {
        return this.$store.state.menus.active;
      },
      set(active) {
        this.setActive({ active });
      }
    }
  },

  // created() {
  //   console.log(this.active, 12423432);
  //   this.active = "contact";
  // },
  // mounted() {},
  methods: {
    ...mapMutations(["setActive", "setShowContactSearch"]),
    // onChange(active) {
    //   // console.log(active);
    //   // this.setActive({active})
    // }
    changeShowStatus(flag) {
      console.log("long long ago", flag, arguments);
      if (flag === "contact") {
        console.log(`flag === "contact"`);
        this.setShowContactSearch({ csshow: true });
      }
    }
  }
};
</script>