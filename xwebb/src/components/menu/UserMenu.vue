<style lang="less" scoped>
.mylike {
  /deep/ i {
    color: #ff2121;
  }
}
</style>

<template>
  <van-tabbar>
    <van-tabbar-item name="back" icon="arrow-left">返回</van-tabbar-item>
    <van-tabbar-item name="like" :icon="mylike?'like':'like-o'" :class="{mylike}">喜欢</van-tabbar-item>
    <van-tabbar-item name="chat" icon="chat-o">私信</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from "vuex";
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "UserMenu",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  // data() {
  //   return { rel: "back" };
  // },
  computed: {
    // ...mapState(["mylike"])
    ...mapState({
      mylike: state => state.menus.mylike
    })
  },
  // created() {},
  // mounted() {},
  methods: {}
};
</script>