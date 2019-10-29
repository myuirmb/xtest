<style lang="scss" scoped>
.mintui {
  font-size: 24px;
}
</style>
<template>
  <div id="app">
    <Tabbar v-model="selected">
      <TabItem id="home">
        <i class="mintui mintui-home"></i>
        <br>首页
      </TabItem>
      <TabItem id="lifes">
        <i class="mintui mintui-star"></i>
        <br>生活
      </TabItem>
      <TabItem id="msg">
        <i class="mintui mintui-msg"></i>
        <br>消息
      </TabItem>
      <TabItem id="my">
        <i class="mintui mintui-user"></i>
        <br>我的
      </TabItem>
    </Tabbar>
  </div>
</template>

<script>
// import { Button } from "mint-ui";
import { Tabbar, TabItem } from "mint-ui";
// import HelloWorld from "./components/HelloWorld.vue";
// Vue.component(Button.name, Button);
export default {
  name: "app",
  data() {
    return {
      selected: "home"
    };
  },
  components: {
    // HelloWorld,
    // Button,
    Tabbar,
    TabItem
  }
};
</script>


