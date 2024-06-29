<template>
  <view class="demo">
    <view class="refresh-view" v-if="isRefreshing"> 正在刷新... </view>
    <nut-swiper
      :init-page="2"
      :auto-play="3000"
      pagination-visible
      pagination-color="#426543"
      pagination-unselected-color="#808080"
    >
      <nut-swiper-item v-for="(item, index) in imgList" :key="item" style="height: 150px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
      </nut-swiper-item>
    </nut-swiper>
    <scroll-view
      :scroll-y="true"
      @scrolltolower="handleScrollToLower"
      lower-threshold="50"
      class="list-container"
      :style="{ height: heightValue + 'px' }"
    >
      <view v-for="(item, index) in list" :key="index" class="list-item">
        {{ item }}
      </view>
      <view class="loading-view" v-if="isLoadingMore"> 正在加载更多... </view>
    </scroll-view>
  </view>

  <tabBar :tabKey="3"></tabBar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Taro, { usePullDownRefresh, useShareAppMessage } from "@tarojs/taro";
import "./index.scss";
Taro.hideHomeButton();
onMounted(() => {
  const query = Taro.createSelectorQuery();
  query.select(".demo").boundingClientRect();
  query.exec((res) => {
    if (res && res[0]) {
      heightValue.value = res[0].height - 160;
    }
  });
  loadData();
});

const heightValue = ref(430);
const list = ref([]);
const isLoadingMore = ref(false);
const isRefreshing = ref(false);
const page = ref(1);
const pageSize = ref(10);
const imgList = ref([
  "https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg",
  "https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg",
  "https://storage.360buyimg.com/jdc-article/welcomenutui.jpg",
  "https://storage.360buyimg.com/jdc-article/fristfabu.jpg",
]);
//适用于整个页面上拉刷新
usePullDownRefresh(async () => {
  console.log("上拉刷新");
  isRefreshing.value = true;
  setTimeout(() => {
    isRefreshing.value = false;
    Taro.stopPullDownRefresh();
  }, 1000);
});
useShareAppMessage((res) => {
  console.log("share", res);
  if (res.from === "button") {
    // 来自页面内转发按钮
    console.log(res.target);
  }
  return {
    title: "纵横命运之上",
    path: "/page/index/index",
  };
});

// 模拟下拉刷新数据
const refreshData = () => {
  isRefreshing.value = true;
  setTimeout(() => {
    list.value = []; // 清空列表
    loadData(); // 加载新的数据
  }, 1000);
};

// 模拟加载更多数据
const loadMoreData = () => {
  isLoadingMore.value = true;
  setTimeout(() => {
    for (let i = 0; i < pageSize.value; i++) {
      list.value.push(`Item ${(page.value - 1) * pageSize.value + i}`);
    }
    page.value++;
    isLoadingMore.value = false;
  }, 1000);
};

const loadData = () => {
  loadMoreData();
  isRefreshing.value = false;
};

// 处理滚动到顶部
const handleScrollToUpper = () => {
  // 刷新逻辑
  refreshData();
};

// 处理滚动到底部
const handleScrollToLower = () => {
  // 加载更多逻辑
  loadMoreData();
};
</script>
