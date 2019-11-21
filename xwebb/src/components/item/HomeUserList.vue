<style lang="less" scoped>
.hulist {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  & > div:first-child {
    flex: 0 0 60px;
    padding: 6px 5px 4px 5px;
  }
  & > div:last-child {
    flex: 1 1 auto;
    & > div:first-child {
      & > div:last-child {
        font-size:10px;
        color:#999;
        text-align:right;
        padding-right:5px;
        // border:1px solid red;
      }
    }
    & > div > div {
      padding: 4px 0px 0px 0px;
      height: 25px;
      & .van-tag {
        display: block;
        float: left;
        font-size: 10px;
        height: 14px;
        margin-right: 3px;
        & > i {
          font-size: 14px;
        }
      }
    }
    & > div:last-child {
      border-bottom: 1px solid #f3f3f3;
      & > div:first-child {
        padding-bottom: 4px;
        font-size: 10px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 220px;
      }
    }
  }
  // & div {
  //   border: 1px solid red;
  // }
}
</style>

<template>
  <div class="hulist">
    <div @click="showPhotos">
      <!-- <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <van-image round width="60" height="60" :src="photo" />
    </div>
    <div @click="jumpUserInfo">
      <van-row type="flex">
        <van-col span="14" style="color:#333;">{{nickname}}</van-col>
        <van-col span="10">{{online}} {{distance}}</van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="24">
          <!-- <van-tag round :type="(gender===1||gender==='1')?'danger':'success'"> -->
          <van-tag v-if="(!!gender)&&(!!age)" round :color="(gender===1||gender==='1')?'#FF6666':'#99CC66'">
            <i v-if="gender===1||gender==='1'" class="iconfont icon-man"></i>
            <i v-if="gender===0||gender==='0'" class="iconfont icon-woman"></i>
            <i>{{` ${age}`}}</i>
          </van-tag>
          <van-tag v-if="!!height" round color="#CCCC66">{{`${height}cm`}}</van-tag>
          <van-tag v-if="!!conste" round color="#ff976a">{{conste}}</van-tag>
          <van-tag v-if="!!salary" round color="#99CCFF">{{salary}}</van-tag>
          <van-tag
            v-if="!(vip === '0' || vip === 0 || vip === '')"
            round
            color="#FFCC33"
          >{{`vip${vip}`}}</van-tag>
        </van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="24">{{maxim}}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Row, Col, Image, Tag } from "vant";
// import { mapMutations } from "vuex";

export default {
  name: "HomeUserList",
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [Tag.name]: Tag
  },
  props: {
    uid: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    gender: {
      type: [String, Number],
      required: true
    },
    age: [String, Number],
    // age: {
    //   type: [String, Number],
    //   required: true
    // },
    height: [String, Number],
    conste: String,
    zodiac: String,
    maxim: String,
    salary: String,
    online: String,
    distance: String,
    vip: [String, Number]
  },
  // data() {
  //   return {    };
  // },
  computed: {},

  // created() {
  //   console.log(this.active, 12423432);
  //   this.active = "contact";
  // },
  // mounted() {},
  methods: {
    showPhotos() {
      console.log(this.uid);
    },
    jumpUserInfo() {
      console.log(this.uid);
      // this.$router.push("my");
      this.$emit("click");
    }
  }
};
</script>