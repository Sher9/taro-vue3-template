<template>
  <div class="login">
    <div class="card-wrap">
      <div class="logo">非现场审计台账管理系统</div>
      <div class="card-inner">
        <div class="card-info">
          <nut-input v-model="formData.name" placeholder="请输入账号" type="text">
            <template #left>
              <div
                class="iconfont icon-yonghu"
                style="margin-right: 15px"
              ></div> </template
          ></nut-input>
          <nut-input v-model="formData.password" placeholder="请输入密码" type="password">
            <template #left>
              <div class="iconfont icon-mima" style="margin-right: 15px"></div> </template
          ></nut-input>
          <nut-input v-model="formData.tel" placeholder="请输入手机号" type="text">
            <template #left>
              <div
                class="iconfont icon-shoujihao"
                style="margin-right: 15px"
              ></div> </template
          ></nut-input>
          <nut-input v-model="formData.addr" placeholder="请输入验证码" type="text">
            <template #left>
              <div class="iconfont icon-yanzhengma" style="margin-right: 15px"></div>
            </template>
            <template #right>
              <nut-button
                shape="square"
                type="info"
                size="small"
                color="#1777FF"
                @click="sendCode"
                :disabled="countdown > 0"
                >{{
                  countdown > 0 ? `${countdown}秒后重新获取` : "获取验证码"
                }}</nut-button
              >
            </template></nut-input
          >
          <div class="button-box">
            <nut-button type="info" class="button" @click="goToIndex"> 登录</nut-button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nut-popup v-model:visible="isShow" :style="{ padding: '30px 50px' }">
    {{ verifyCode }}
  </nut-popup>
</template>
<script setup>
import { ref } from "vue";
import Taro from "@tarojs/taro";

import "./index.scss";

const isDisabled = ref(false);
const formData = ref({
  name: "",
  password: "",
  tel: "",
  addr: "",
  info: "",
});

const countdown = ref(0);
const verifyCode = ref("");
const isShow = ref(false);
const goToIndex = () => {
  Taro.reLaunch({ url: "/subpages/home/index" });
};

const sendCode = () => {
  if (countdown.value > 0) {
    return;
  }

  // 设置倒计时时间，这里设置为60秒
  countdown.value = 60;

  // 创建倒计时
  const intervalId = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value -= 1;
      if (countdown.value === 56) {
        verifyCode.value = generateFourDigitNumber();
        isShow.value = true;
      }
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
};

//随机生成四位数
const generateFourDigitNumber = () => {
  let number = Math.floor(Math.random() * 10000);
  return number.toString().padStart(4, "0");
};
</script>
