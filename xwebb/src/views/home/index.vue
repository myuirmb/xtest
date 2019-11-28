<style lang="less" scoped>
</style>

<template>
  <!-- <div id="home">
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
    />
  </div>-->
  <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="min-height:100vh">
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
    />
    <div style="height:51px;background-color:#fff;"></div>
  </van-pull-refresh>-->
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="min-height:100vh">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      offset="30"
      @load="onLoad"
    >
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
      />
    </van-list>
  </van-pull-refresh>
</template>

<script>
import HomeUserList from "../../components/item/HomeUserList.vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { PullRefresh, List } from "vant";

export default {
  name: "home",
  components: {
    [HomeUserList.name]: HomeUserList,
    [PullRefresh.name]: PullRefresh,
    [List.name]: List
  },
  data() {
    return {
      // count: 0,
      isLoading: false,

      loading: false,
      finished: false
    };
  },
  computed: {
    ...mapState({ homelist: state => state.userlist.homelist })
  },
  created() {
    this.setShowMenus({ menus: "MainMenu" });
    if (this.$store.state.menus.active !== "home") {
      this.setActive({ active: "home" });
    }
    if (this.homelist.length >= 15) {
      this.finished = true;
    }
  },
  mounted() {
    // this.getHomeUserList();
    // console.log(this.homelist);
  },
  methods: {
    ...mapMutations(["setActive", "setShowMenus"]),
    ...mapActions(["getHomeUserList"]),
    onRefresh() {
      setTimeout(() => {
        // this.$toast('刷新成功');
        this.isLoading = false;
        // this.count++;
        this.getHomeUserList();
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        // // 加载状态结束
        // this.loading = false;

        // // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true;
        // }
        this.getHomeUserList().then(() => {
          this.loading = false;
        });
        if (this.homelist.length >= 15) {
          this.finished = true;
        }
      }, 500);
    },
    jumpUserInfo() {
      console.log(arguments, "abcll");
    }
  }
};
</script>