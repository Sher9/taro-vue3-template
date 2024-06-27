<template>
  <view class="home">
    <nut-swiper :auto-play="3000" @change="onChange">
      <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 220px">
        <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
      </nut-swiper-item>
      <template #page>
        <div class="swiper-pagination">{{ val }}/3</div>
      </template>
    </nut-swiper>

    <div class="content">
      <div class="content-item">
        <div class="content-item-left">
          <div
            className="iconfont icon-qingdankushoucang"
            style="color: #1777ff; font-size: 30rpx"
          ></div>
          <p>我的收藏</p>
        </div>
        <RectRight size="12" class="content-item-right"></RectRight>
      </div>
      <div class="content-image">
        <div class="content-image-item">
          <div class="iconfont icon-xinwen my-icon"></div>
          <div class="content-image-item-text">调阅清单</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-yuebaoribaozhoubao my-icon"></div>
          <div class="content-image-item-text">制度清单</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-xietongzhengce my-icon"></div>
          <div class="content-image-item-text">问题检查清单</div>
        </div>
      </div>
    </div>

  </view>
  <tabBar :tabKey="0"></tabBar>
</template>

<script setup>
import { ref } from "vue";
import "./index.scss";
import { RectRight } from "@nutui/icons-vue-taro";
import pictureOne from "../../assets/img/1.jpg";
import pictureTwo from "../../assets/img/2.jpg";
import pictureThree from "../../assets/img/3.jpg";
const val = ref(1);
const list = ref([pictureOne, pictureTwo, pictureThree]);
const onChange = (index) => {
  val.value = index + 1;
};
</script>
