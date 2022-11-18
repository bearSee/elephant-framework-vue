<template>
  <div class="grow-training-card">
    <div class="area-title">
      <img v-if="data.assistImg" class="image" :src="data.assistImg" alt="">
      <span v-else class="text">{{ data.module || '' }}</span>
    </div>
    <div class="area-content">
      <template v-if="cardData.length">
        <div
          class="card-box"
          v-for="(data, i) in cardData"
          :key="i">
          <div class="first-card">
            <a :href="data.first.linkUrl">
              <img class="card_img" :src="data.first.imgUrl" alt="">
            </a>
          </div>
          <div class="second-card" v-if="data.second.some(d => d)">
            <a :href="data.second[0]?.linkUrl">
              <img class="card_img" :src="data.second[0]?.imgUrl" alt="">
            </a>
            <a :href="data.second[1]?.linkUrl">
              <img class="card_img" v-if="data.second[1]?.imgUrl" :src="data.second[1]?.imgUrl" alt="">
            </a>
          </div>
        </div>
      </template>
      <div class="empty" v-else>暂无内容</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'GrowTrainingCard',
    props: {
        data: {
            type: Object,
            default: () => ({})
        }
    },
    data () {
        const multiple = 3
        const educateList = this.data.educateList || []
        const cardData = Array(Math.ceil(educateList.length / multiple)).fill().map((_, i) => ({
            first: educateList[i * multiple],
            second: [educateList[i * multiple + 1], educateList[i * multiple + 2]]
        }))
        return {
            cardData
        }
    },
    methods: {
    }
}
</script>

<style lang="less">
.grow-training-card {
  margin: 10px 0;
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
    display: flex;
    flex-wrap: wrap;
    .card-box {
      width: 100%;
      margin-bottom: 11px;
      text-decoration: none;
      color: #333;
      display: flex;
      a, .card_img {
        width: 100%;
        height: 100px;
        margin-bottom: 5px;
        object-fit: cover;
        border-radius: 8px;
        display: inline-block;
      }
      .first-card {
        width: calc(50% - 4px);
        margin-right: 8px;
        .card_img {
          height: 210px;
        }
      }
      .second-card {
        width: calc(50% - 5px);
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
