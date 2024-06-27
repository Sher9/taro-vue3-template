<template>
  <view class="demo">
    <view class="search-view">
      <nut-searchbar v-model="val" background="#1777FF" input-background="#fff">
        <template #rightout>
          <div className="iconfont icon-shaixuan my-icon" @click="showRight = true"></div>
        </template>
        <template #rightin>
          <Search2 />
        </template>
      </nut-searchbar>
    </view>

    <div class="demo-list"></div>
    <nut-popup
      v-model:visible="showRight"
      position="right"
      :style="{ width: '80%', height: '100%' }"
    >
    </nut-popup>
  </view>
  <tabBar :tabKey="1"></tabBar>
</template>

<script setup>
import { ref } from "vue";
import "./index.scss";
import { Search2 } from "@nutui/icons-vue-taro";
const val = ref("");
const showRight = ref(false);
</script>
