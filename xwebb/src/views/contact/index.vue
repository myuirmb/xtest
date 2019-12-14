<style lang="less" scoped>
  .csearch{
    position:  fixed;
    padding: 0px 2px;
    border: 1px solid #f3f3f3;
    border-radius: 50%;
    bottom: 60px;
    right: 10px;
  }
</style>

<template>
  <div>
    <van-popup
      v-model="show"
      position="left"
      style="width:80vw;height:100vh"
      @click-overlay="popupOverlayClick"
    >
      <!-- @close="popupClose"
      @closed="popupClosed"-->
      <van-tree-select
        :items="items"
        :active-id.sync="activeItemsIds"
        :main-active-index.sync="activeNavIndex"
        @click-nav="treeSelectNavClick"
        @click-item="treeSelectItemClick"
        height="100vh"
      />
    </van-popup>
    <!-- <van-button type="info" @click="showPopup">信息按钮</van-button> -->
    <!-- <van-tabs v-model="active" type="line">
      <van-tab title="最新访客" name="visitors"></van-tab>
      <van-tab title="相互关注" name="mutual">内容 1</van-tab>
      <van-tab title="我关注的" name="melike">内容 2</van-tab>
      <van-tab title="关注我的" name="likeme">内容 3</van-tab>
      <van-tab title="我点赞的" name="mesmile">内容 4</van-tab>
      <van-tab title="点赞我的" name="smileme">内容 4</van-tab>
      <van-tab title="我阻止的" name="meblock">内容 4</van-tab>
    </van-tabs>-->

    <div class="csearch" @click="showPopup">
      <van-icon name="search" color="#f3f3f3" size="24" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Tabs, Tab, Popup, Button, TreeSelect, Sticky, Icon } from "vant";

export default {
  name: "contact",
  components: {
    [Tabs.name]: Tabs,
    [Tab.name]: Tab,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [TreeSelect.name]: TreeSelect,
    [Sticky.name]: Sticky,
    [Icon.name]: Icon
  },
  data() {
    return {
      show: false,
      activeNavId: "",
      activeNavIndex: 0,
      activeItemsIds: ["all"],
      items: [
        {
          id: "visitors",
          text: "最新访客",
          children: [
            { id: "all", text: "全部" },
            { id: "love", text: "最爱" },
            { id: "bt", text: "被胎" },
            { id: "gt", text: "跪舔" },
            { id: "ot", text: "其他" }

            // { id: "all0", text: "全部" },
            // { id: "love", text: "最爱" },
            // { id: "bt", text: "被胎" },
            // { id: "gt", text: "跪舔" },
            // { id: "ot", text: "其他" },
            // { id: "all0", text: "全部" },
            // { id: "love", text: "最爱" },
            // { id: "bt", text: "被胎" },
            // { id: "gt", text: "跪舔" },
            // { id: "ot", text: "其他" },
            // { id: "all0", text: "全部" },
            // { id: "love", text: "最爱" },
            // { id: "bt", text: "被胎" },
            // { id: "gt", text: "跪舔" },
            // { id: "ot", text: "其他" },
            // { id: "all0", text: "全部" },
            // { id: "love", text: "最爱" },
            // { id: "bt", text: "被胎" },
            // { id: "gt", text: "跪舔" },
            // { id: "ot", text: "其他" }
          ]
        },
        {
          id: "mutual",
          text: "相互关注",
          children: [{ id: "all", text: "全部" }]
        },
        {
          id: "melike",
          text: "我关注的",
          children: [{ id: "all", text: "全部" }]
        },
        {
          id: "likeme",
          text: "关注我的",
          children: [{ id: "all", text: "全部" }]
        },
        {
          id: "mesmile",
          text: "我点赞的",
          children: [{ id: "all", text: "全部" }]
        },
        {
          id: "smileme",
          text: "点赞我的",
          children: [{ id: "all", text: "全部" }]
        },
        {
          id: "meblock",
          text: "我阻止的",
          children: [{ id: "all", text: "全部" }]
        }
      ]
      // active: "visitors"
    };
  },
  // computed: {
  //   show: {
  //     get() {
  //       return this.$store.state.menus.csshow;
  //     },
  //     set(csshow) {
  //       console.log(`this.in.contact.pages`)
  //       this.setShowContactSearch({ csshow });
  //     }
  //   }
  // },
  created() {
    this.setShowMenus({ menus: "MainMenu" });
    if (this.$store.state.menus.active !== "contact") {
      this.setActive({ active: "contact" });
    }
    this.activeNavId = this.items[this.activeNavIndex].id;
  },
  methods: {
    // ...mapMutations(["setActive", "setShowMenus", "setShowContactSearch"]),
    ...mapMutations(["setActive", "setShowMenus"]),
    showPopup() {
      this.show = true;
    },
    // popupClose(arg) {
    //   console.log(arg, "close");
    // },
    // popupClosed(arg) {
    //   console.log(arg, "closed");
    // },
    popupOverlayClick(arg) {
      console.log(arg, "over", this.activeNavId, this.activeItemsIds);
    },
    treeSelectNavClick(index) {
      if (this.activeNavIndex !== index) {
        console.log(index, this.items[index].id);
        this.activeNavId = this.items[index].id;
        this.activeItemsIds = ["all"];
      }
    },
    treeSelectItemClick(item) {
      console.log(item, item.id);
      if (item.id === "all") {
        setTimeout(() => {
          this.activeItemsIds = ["all"];
        }, 100);
      } else {
        setTimeout(() => {
          if (this.activeItemsIds.length > 1) {
            this.activeItemsIds = this.activeItemsIds.filter((value, index) => {
              // console.log(index, value);
              return value !== "all";
            });
          }
          if (this.activeItemsIds.length === 0) {
            this.activeItemsIds = ["all"];
          }
        }, 100);
      }
    }
  }
};
</script>