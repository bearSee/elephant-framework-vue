<template>
  <div class="expert-words-card">
    <div class="area-title">
      <img v-if="data.assistImg" class="image" :src="data.assistImg" alt="">
      <span v-else class="text">{{ data.module || '' }}</span>
    </div>
    <div class="area-content">
      <template v-if="expertWordsData">
        <div class="introduction-box">
          <div class="box-content">
            <div class="title">专家简介</div>
            <div class="text-box"><div v-for="t in (expertWordsData.assistName || '').split('\n')" :key="t">{{ t }}</div></div>
          </div>
          <img class="expert-img" :src="expertWordsData.imgUrl" alt="">
        </div>
        <div class="topic-box">
          <div class="title">本期话题</div>
          <div class="box-content">
            <div class="text">{{ expertWordsData.assistTitle }}</div>
            <a class="skip-btn" :href="expertWordsData.linkUrl">去听课</a>
          </div>
        </div>
      </template>
      <div class="empty" v-else>暂无内容</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ExpertWordsCard',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        return {
            expertWordsData: (this.data.educateList || [])[0]
        }
    },
    methods: {
    }
}
</script>

<style lang="less">
.expert-words-card {
  margin: 10px 0;
  margin-bottom: 48px;
  .area-title {
    display: flex;
    justify-content: space-between;
    .image {
      height: 38px;
      max-width: 100%;
      object-fit: cover;
    }
    .text {
      font-size: 18px;
      line-height: 38px;
      font-weight: 500;
    }
  }
  .area-content {
    margin: 10px 0;
    .introduction-box {
      display: flex;
      justify-content: space-between;
      color: #333333;
      line-height: 1.2;
      .box-content {
        .title {
          font-size: 15px;
          font-family: PingFangSC;
        }
        .text-box {
          margin-top: 7px;
          font-size: 11px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #9A9A9A;
          div {
            margin: 3px 0;
          }
        }
      }
      .expert-img {
        margin-left: 5px;
        width: 100px;
        height: 131px;
      }
    }
    .topic-box {
      margin-top: 13px;
      .title {
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #F29C35;
      }
      .box-content {
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        .text {
          font-size: 11px;
          font-family: PingFangSC;
          margin: auto 0;
        }
        .skip-btn {
          width: 55px;
          background: #4B99F5;
          border-radius: 8px;
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 9px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          padding: 1px 0 2px 0;
        }
      }
    }
    .empty {
      background: #f8f8f8;
      color: #999;
      width: 100%;
      height: 91px;
      line-height: 91px;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>
