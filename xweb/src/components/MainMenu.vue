<style lang="scss" scoped>
.mintui {
  font-size: 24px;
}
</style>
<template>
  <Tabbar v-model="selected" @click.native="handleClick">
    <TabItem id="home">
      <i class="mintui mintui-home"></i>
      <br />首页
    </TabItem>
    <TabItem id="lifes">
      <i class="mintui mintui-star"></i>
      <br />生活
    </TabItem>
    <TabItem id="users">
      <i class="mintui mintui-users"></i>
      <br />联系人
    </TabItem>
    <TabItem id="msg">
      <i class="mintui mintui-msg"></i>
      <br />消息
    </TabItem>
    <TabItem id="my">
      <i class="mintui mintui-user"></i>
      <br />我的
    </TabItem>
  </Tabbar>
</template>

<script>
import { Tabbar, TabItem } from "mint-ui";

export default {
  data() {
    return {
      oldselected: "home",
      selected: "home"
    };
  },
  components: {
    Tabbar,
    TabItem
  },
  methods: {
    handleClick() {
      // console.log(this.selected);
      if (this.selected !== this.oldselected) {
        this.oldselected = this.selected;
        switch (this.selected) {
          case "home":
            this.$router.push("home");
            break;
          case "lifes":
            this.$router.push("lifes");
            break;
          case "users":
            this.$router.push("users");
            break;
          case "msg":
            this.$router.push("msg");
            break;
          case "my":
            this.$router.push("my");
            break;
          default:
            // this.$router.push("home");
            break;
        }
      }
    }
  }
};
</script>


