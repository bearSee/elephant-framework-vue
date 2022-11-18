<template>
  <div class="page-head">
    <div class="head-left" @click="$router.go(-1)">
      <img src="@/static/image/arrow.png" alt="">
      <span class="title">{{ title }}</span>
    </div>
    <div class="head-right" v-if="home" @click="$router.push('/home')">
      <img src="@/static/image/home.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
    name: 'PageHead',
    props: {
        title: {
            type: String,
            default: ''
        },
        home: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style>
.page-head {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #222222;
  padding: 17px;
}
.page-head .head-left {
  display: flex;
}
.page-head .head-left img {
  width: 9px;
  height: 16px;
  margin: auto 0;
}
.page-head .head-left .title {
  display: inline-block;
  margin: auto 5px;
  line-height: 21px;
  position: relative;
  top: -1px;
}
.page-head .head-right img {
  width: 19px;
  height: 18px;
}
</style>
