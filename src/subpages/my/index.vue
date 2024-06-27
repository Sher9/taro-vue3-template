<template>
  <div class="user">
    <div class="header">
      <div class="header-icon">
        <nut-avatar size="large"> 张</nut-avatar>
      </div>

      <nut-button type="primary" className="header-userName" openType="getPhoneNumber">
        张三
      </nut-button>
    </div>
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

    <div class="content">
      <div class="content-item" style="border: none">
        <div class="content-item-left">
          <div className="iconfont icon-mima" style="color: #ffae0d"></div>
          <p>修改密码</p>
        </div>
        <RectRight size="12" class="content-item-right"></RectRight>
      </div>
    </div>

    <div class="button-box">
      <nut-button type="danger" class="button" @click="exit">退出登录</nut-button>
    </div>
  </div>
  <tabBar :tabKey="2"></tabBar>
</template>
<script setup>
import "./index.scss";
import { RectRight } from "@nutui/icons-vue-taro";
import Taro from "@tarojs/taro";
const exit = () => {
  Taro.navigateTo({ url: "/pages/index/index" });
};
</script>
