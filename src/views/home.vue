<template>
  <div class="home-page">
    <div class="home-head">
      <img class="home-back" src="@/static/image/home_back.png" alt="" srcset="">
      <img class="logo" src="@/static/image/logo.png" alt="" srcset="">
      <img class="about-me" src="@/static/image/about_me.png" alt="" srcset="">
      <img class="Hi" src="@/static/image/Hi.png" alt="" srcset="">
    </div>
    <div class="home-body">
      <div
        class="module-box"
        v-for="menu in menus"
        :key="menu.id">
        <img
          v-if="menu.imgUrl"
          :src="menu.imgUrl"
          @click="handlerSkip(menu)"
          alt="" srcset="">
        <div v-else class="name cut_font">{{ menu.module }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getContentList } from '@/api/module.js'

export default {
    name: 'HomePage',
    data () {
        return {
            menus: []
        }
    },
    methods: {
        handlerSkip ({ id: moduleId, module: moduleName }) {
            this.$router.push({
                path: '/moduleDetail',
                query: { moduleId, moduleName }
            })
        }
    },
    created () {
        getContentList(1).then((res) => {
            this.menus = res?.data || []
        })
    }
}
</script>

<style lang="less">
.home-page {
    .home-head {
        width: 375px;
        height: 167px;
        position: relative;
        img {
            position: absolute;
        }
        .home-back {
            width: 375px;
            height: 122px;
            top: 0;
            left: 0;
        }
        .logo {
            width: 77px;
            height: 22px;
            top: 30px;
            left: 36px;
        }
        .about-me {
            width: 44px;
            height: 16px;
            top: 36px;
            right: 36px;
        }
        .Hi {
            width: 311px;
            height: 86px;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .home-body {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 230px;
        margin: 31px auto;
        .module-box {
            display: flex;
            flex-direction: column;
            a, img {
                width: 114px;
                height: 114px;
                margin: 0;
                border-radius: 8px;
                object-fit: cover;
            }
            .name {
                font-size: 10px;
                max-width: 110px;
                position: relative;
                top: -4px;
            }
        }
    }
}
</style>
