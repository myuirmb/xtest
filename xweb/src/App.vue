<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <Button type="primary" size="small">primary</Button>
      <Button type="primary">primary</Button>
      <!-- <mt-button type="primary">primary</mt-button> -->
      <Tabbar v-model="selected">
        <TabItem id="外卖">
          <img slot="icon" src="../assets/100x100.png" />
          外卖
        </TabItem>
        <TabItem id="订单">
          <img slot="icon" src="../assets/100x100.png" />
          订单
        </TabItem>
        <TabItem id="发现">
          <img slot="icon" src="../assets/100x100.png" />
          发现
        </TabItem>
        <TabItem id="我的">
          <img slot="icon" src="../assets/100x100.png" />
          我的
        </TabItem>
      </Tabbar>

    </div>
  </div>
</template>

<script>
import { Button } from "mint-ui";
import { Tabbar, TabItem } from "mint-ui";
import HelloWorld from "./components/HelloWorld.vue";
// Vue.component(Button.name, Button);
export default {
  name: "app",
  components: {
    HelloWorld,
    Button,
    Tabbar,
    TabItem
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
