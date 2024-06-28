<template>
  <view class="list">
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

    <nut-tabs
      v-model="tabValue"
      background="#fff"
      color="#1777FF"
      size="small"
      auto-height="true"
    >
      <template #titles>
        <div
          v-for="item in list"
          :key="item.paneKey"
          class="custom-tab-item"
          @click="tabValue = item.paneKey"
        >
          <div
            class="custom-title"
            :class="{
              active: tabValue === item.paneKey,
            }"
          >
            {{ item.title }}
          </div>
        </div>
      </template>
    </nut-tabs>

    <view class="list-container" :style="{ height: heightValue + 'px' }">
      <view v-for="item in dataList" :key="item.id" class="list-item">
        <view class="left-icon">
          <div class="iconfont my-icon" :class="getIcon(item.typeValue)"></div>
        </view>
        <view class="right-con">
          <view class="top-title">
            <view class="text">{{ item.userName }}</view>
            <view class="mark" v-show="item.isMark"
              ><nut-rate
                v-model="rateValue"
                :count="1"
                active-color="#FA2C19"
                size="20"
                :custom-icon="HeartFill"
              />
            </view>
          </view>

          <view class="desc">
            <nut-tag
              plain
              type="primary"
              style="margin-right: 5px; font-size: 10px; height: 16px; margin-top: 3px"
            >
              {{ item.typeName }}
            </nut-tag>
            <view>{{ item.desc }}</view>
          </view>
        </view>
        <view class="button-view">
          <text class="button effective">下载</text>
          <text class="button warning" v-if="item.isMark">取消收藏</text>
          <text class="button effective" v-else>收藏</text>
        </view>
      </view>
    </view>

    <nut-popup
      v-model:visible="showRight"
      position="right"
      :style="{ width: '80%', height: '100%' }"
    >
      <view class="popup_condition">
        <view class="popup_title"> 业务类别 </view>
        <view class="popup_type">
          <text
            v-for="item in typeList"
            :key="item.value"
            class="popup_option_text"
            :class="{
              active: activeType === item.value,
            }"
            >{{ item.label }}</text
          >
        </view>
      </view>
      <view class="popup_button">
        <text class="popup_reset" @click="showRight = false">取消</text>
        <text class="popup_sure" @click="showRight = false">确定</text>
      </view>
    </nut-popup>
  </view>
  <tabBar :tabKey="1"></tabBar>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { Search2, HeartFill } from "@nutui/icons-vue-taro";
import { useUserStore } from "@/store";

Taro.hideHomeButton();
onMounted(() => {
  const query = Taro.createSelectorQuery();
  query.select(".list").boundingClientRect();
  query.exec((res) => {
    if (res && res[0]) {
      heightValue.value = res[0].height - 130;
    }
  });
});
const userStore = useUserStore();
const typeList = computed(() => userStore.typeList);
const heightValue = ref(430);
const val = ref("");
const tabValue = ref("c1");
const rateValue = ref(1);
const showRight = ref(false);
const list = ref([
  {
    title: "调阅清单",
    paneKey: "c1",
  },
  {
    title: "制度清单",
    paneKey: "c2",
  },
  {
    title: "问题检查清单",
    paneKey: "c3",
  },
]);
const activeType = ref("c1");

const dataList = reactive([
  {
    id: 1,
    userName: "123",
    typeName: "安全保卫",
    typeValue: "c1",
    desc: "公司业务部",
    isMark: true,
  },
  {
    id: 2,
    userName: "信用证",
    typeName: "安全保卫",
    typeValue: "c2",
    desc: "公司业务部",
    isMark: false,
  },
  {
    id: 3,
    userName: "征信专项审计",
    typeName: "计划财务",
    typeValue: "c3",
    desc: "风控管理部",
    isMark: false,
  },
  {
    id: 4,
    userName: "123",
    typeName: "电子银行",
    typeValue: "c4",
    desc: "公司业务部",
  },
  {
    id: 5,
    userName: "信用证",
    typeName: "电子银行",
    typeValue: "c4",
    desc: "公司业务部",
  },
  {
    id: 6,
    userName: "信用证",
    typeName: "电子银行",
    typeValue: "c4",
    desc: "公司业务部",
  },
]);

const getIcon = (type) => {
  if (type && typeList.value.find((item) => item.value === type)) {
    return `icon-${typeList.value.find((item) => item.value === type).icon}`;
  } else {
    return "kehuchaxun";
  }
};
</script>
