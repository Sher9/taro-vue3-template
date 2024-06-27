<template>
  <view class="demo">
    <view class="search-view">
      <nut-searchbar v-model="val" background="#1777FF" input-background="#fff">
        <template #rightout>
          <div className="iconfont icon-shaixuan my-icon" @click="showRight = true"></div>
        </template>
        <template #rightin>
          <Search2 style="margin-right: 15rpx" />
        </template>
      </nut-searchbar>
    </view>
    <nut-tabs v-model="tabValue" background="#1777FF" color="#fff" size="small"> 
      <nut-tab-pane title="Tab 1" pane-key="1"> Content 1 </nut-tab-pane>
      <nut-tab-pane title="Tab 2" pane-key="2"> Content 2 </nut-tab-pane>
      <nut-tab-pane title="Tab 3" pane-key="3"> Content 3 </nut-tab-pane>
    </nut-tabs>
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
const tabValue = ref("1");
const showRight = ref(false);
</script>
