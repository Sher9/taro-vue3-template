<template>
  <div class="tabBar">
    <div class="tabBar-content">
      <div
        class="tabBar-content-item"
        :class="item.active ? 'tabBar-content-itemActive' : ''"
        v-for="(item, idx) in tabList"
        :key="idx"
        @click="TabClick(item, idx)"
      >
        <div class="iconfont" :class="item.iconName"></div>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, toRefs, watch, nextTick } from "vue";
import "./index.scss";
import Taro from "@tarojs/taro";

// const activeIndex = computed(() => useUserStore().tabKey);
// console.log(activeIndex);

const props = defineProps({
  tabKey: {
    type: Number,
  },
});

watch(
  () => props.tabKey,
  (value) => {
    nextTick(() => {
      state.tabList.forEach((item, index) => {
        if (value === index) {
          item.active = true;
        } else {
          item.active = false;
        }
      });
    });
  },
  { immediate: true }
);

const state = reactive({
  tabList: [
    {
      iconName: "icon-shouye-zhihui",
      name: "首页",
      active: true,
      targetUrl: "/subpages/home/index",
    },
    {
      iconName: "icon-qingdankushoucang",
      name: "收藏",
      active: false,
      targetUrl: "/subpages/list/index",
    },
    {
      iconName: "icon-gerenxinxi",
      name: "我的",
      active: false,
      targetUrl: "/subpages/my/index",
    },
  ],
});

const { tabList } = toRefs(state);

const TabClick = (tarVal, index) => {
  //   state.tabList = state.tabList.map((i, idx) => {
  //     return Object.assign(i, {
  //       active: idx == tarIndex ? true : false,
  //     });
  //   });
  // useUserStore().setTabKey(index);
  Taro.reLaunch({
    url: `${tarVal.targetUrl}`,
    success: (res) => {},
  });
};
</script>
