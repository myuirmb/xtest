<style lang="less" scoped>
.my-header {
  height: 185px;
  width: 100%;
  background: url("../../assets/images/header/9.jpg");
  background-size: cover;
  position: relative;

  & > div:last-child {
    position: absolute;
    top: 95px;
    left: 30px;
    // border:1px solid red;
    & > div:last-child {
      float: right;
      // border: 1px solid red;
      padding: 10px 0 0 3px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 169px;
    }
    & .vip {
      color: #ff2121;
    }
  }
}
.my-items {
  margin: 5px 0 0 0;
}
.bg {
  text-align: center;
  padding: 5px 0;
  background-color: #fff;
}
</style>

<template>
  <div id="my">
    <div class="my-header">
      <div>
        <van-image round width="60" height="60" :src="header" />
        <!-- <img width="60" height="60" :src="header1"> -->
        <div :class="{vip}">{{nickname}}</div>
      </div>
    </div>
    <div>
      <van-grid :column-num="3" :border="false">
        <!-- <van-grid-item>
          <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>-->
        <van-grid-item icon="photo-o" text="发布动态" />
        <van-grid-item icon="photo-o" text="更改头像" />
        <van-grid-item icon="photo-o" text="维护相册" />
      </van-grid>
    </div>
    <div class="my-items">
      <van-cell-group>
        <van-cell title="ID" value="281117844" />
        <van-cell title="注册方式" is-link value="新浪微博" />
        <van-cell title="手机绑定" is-link value="136********" />
      </van-cell-group>
    </div>
    <div class="my-items">
      <van-cell-group>
        <van-cell title="基本资料" is-link />
      </van-cell-group>
    </div>
    <div class="my-items">
      <van-cell-group>
        <van-cell title="修改密码" is-link />
      </van-cell-group>
    </div>
    <div class="my-items bg">
      <van-button type="primary" round size="mini" width="80%">退出登陆</van-button>
    </div>
    <div class="my-items bg">
      <van-button type="warning" round size="mini">关闭资料</van-button>
    </div>
    <div class="my-items"></div>
  </div>
</template>

<script>
import { Button, Image, Grid, GridItem, Cell, CellGroup } from "vant";
import { mapMutations } from "vuex";
// import header from "../../assets/images/header/cat.jpeg";

export default {
  name: "my",
  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      header: require("../../assets/images/header/cat.jpeg"),
      // header1: "/img/cat.89cb4ea3.jpeg",
      vip: true,
      nickname: "大家好"
    };
  },
  created() {
    this.setShowMenus({ menus: "MainMenu" });
    if (this.$store.state.menus.active !== "my")
      this.setActive({ active: "my" });
  },
  methods: {
    ...mapMutations(["setActive", "setShowMenus"])
  }
};
</script>