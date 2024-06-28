<template>
  <view class="home">
    <div class="swiper">
      <nut-swiper :auto-play="3000" @change="onChange">
        <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 160px">
          <img
            :src="item"
            alt=""
            style="height: 100%; width: 100%; border-radius: 16rpx"
            draggable="false"
          />
        </nut-swiper-item>
        <template #page>
          <div class="swiper-pagination">{{ val }}/3</div>
        </template>
      </nut-swiper>
    </div>

    <div class="content">
      <div class="content-item">
        <div class="content-item-left">
          <!-- <div
            className="iconfont icon-qingdankushoucang"
            style="color: #1777ff; font-size: 30rpx"
          ></div> -->
          <p>题库管理</p>
        </div>
      </div>
      <div class="content-text">
        <div class="content-text-view green_bg" style="margin-right: 2%">
          <div class="content-text-item">
            <div class="iconfont icon-qingdan5 my-icon green"></div>
            <div class="item-text">考试试题</div>
          </div>
        </div>
        <div class="content-text-view purple_bg">
          <div class="content-text-item">
            <div class="iconfont icon-qingdan6 my-icon purple"></div>
            <div class="item-text">考试得分</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-item">
        <div class="content-item-left">
          <!-- <div
            className="iconfont icon-qingdankushoucang"
            style="color: #1777ff; font-size: 30rpx"
          ></div> -->
          <p>台账管理</p>
        </div>
      </div>
      <div class="content-text">
        <div class="content-text-view aqua_bg">
          <div class="content-text-item">
            <div class="iconfont icon-shebeiqingdan my-icon aqua"></div>
            <div class="item-text">问题整理台账</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-item">
        <div class="content-item-left">
          <!-- <div
            className="iconfont icon-qingdankushoucang"
            style="color: #1777ff; font-size: 30rpx"
          ></div> -->
          <p>清单管理</p>
        </div>
        <RectRight size="12" class="content-item-right"></RectRight>
      </div>
      <div class="content-image">
        <div class="content-image-item">
          <div class="iconfont icon-xinwen my-icon blue"></div>
          <div class="content-image-item-text">调阅清单</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-yuebaoribaozhoubao my-icon green"></div>
          <div class="content-image-item-text">制度清单</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-liebiaoqingdan my-icon orange"></div>
          <div class="content-image-item-text">问题检查清单</div>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-item">
        <div class="content-item-left">
          <!-- <div
            className="iconfont icon-qingdankushoucang"
            style="color: #1777ff; font-size: 30rpx"
          ></div> -->
          <p>报表管理</p>
        </div>
        <RectRight size="12" class="content-item-right"></RectRight>
      </div>
      <div class="content-image">
        <div class="content-image-item">
          <div class="iconfont icon-kehuchaxun my-icon blue"></div>
          <div class="content-image-item-text">审计</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-yusuanjisuan my-icon blue"></div>
          <div class="content-image-item-text">信贷</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-baoxiaozichan my-icon blue"></div>
          <div class="content-image-item-text">资金</div>
        </div>
        <div class="content-image-item">
          <div class="iconfont icon-kehuchaxun my-icon blue"></div>
          <div class="content-image-item-text">柜面</div>
        </div>
      </div>
    </div>
  </view>
  <tabBar :tabKey="0"></tabBar>
</template>

<script setup>
import { ref } from "vue";
import Taro from "@tarojs/taro";
import "./index.scss";
import { RectRight } from "@nutui/icons-vue-taro";
import pictureOne from "../../assets/img/1.jpg";
import pictureTwo from "../../assets/img/2.jpg";
import pictureThree from "../../assets/img/3.jpg";

Taro.hideHomeButton();
const val = ref(1);
const list = ref([pictureOne, pictureTwo, pictureThree]);
const onChange = (index) => {
  val.value = index + 1;
};
</script>
