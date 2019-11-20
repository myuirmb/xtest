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
    & > div > div {
      padding: 4px 0px 0px 0px;
      height: 25px;
    }
    & > div:last-child {
      border-bottom: 1px solid #f3f3f3;
      & > div:first-child {
        padding-bottom: 4px;
      }
    }
  }
  // & div {
  //   border: 1px solid red;
  // }
  .van-tag {
    font-size: 10px;
    height: 14px;
    margin: 0px 2px 0px 0px;
  }
}
</style>

<template>
  <div class="hulist">
    <div>
      <!-- <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
      <van-image round width="60" height="60" :src="photo" />
    </div>
    <div>
      <van-row type="flex">
        <van-col span="14" style="color:#333;">{{nickname}}</van-col>
        <van-col
          span="10"
          style="font-size:10px;color:#999;text-align:right;padding-right:2px;"
        >{{`个玉在线`}} {{distance}}</van-col>
      </van-row>
      <van-row type="flex">
        <van-col span="24">
          <!-- <van-tag round :type="(gender===1||gender==='1')?'danger':'success'"> -->
          <van-tag round :color="(gender===1||gender==='1')?'#FF6666':'#99CC66'">
            <i v-if="gender===1||gender==='1'" class="iconfont icon-man"></i>
            <i v-if="gender===0||gender==='0'" class="iconfont icon-woman"></i>
            {{` ${age}`}}
          </van-tag>
          <van-tag round color="#CCCC66">{{`${height}cm`}}</van-tag> <!-- type="primary" -->
          <van-tag round type="warning">{{conste}}</van-tag> <!-- color="#FF6600" -->
          <van-tag round color="#99CCFF">{{salary}}</van-tag>
          <van-tag v-if="!(vip === '0' || vip === 0 || vip === '')" round color="#FFCC33">{{`vip${vip}`}}</van-tag>
        </van-col>
      </van-row>
      <van-row type="flex">
        <van-col
          span="24"
          style="font-size:10px;color:#999;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:220px;"
        >{{maxim}}</van-col>
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
    age: {
      type: [String, Number],
      required: true
    },
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
  methods: {}
};
</script>