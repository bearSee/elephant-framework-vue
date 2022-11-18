<template>
  <div class="area-card">
    <div class="area-title" v-if="showTitle">
      <img v-if="data.assistImg" class="image" :src="data.assistImg" alt="">
      <span v-else class="text">{{ data.module || '' }}</span>
      <div class="more" v-if="showMore && (data.educateList || []).length > 6" @click="$emit('view-more')"><span>更多</span><img src="@/static/image/arrow_right.png" alt=""></div>
    </div>
    <div class="area-content">
      <template v-if="(data.educateList || []).length">
        <a
          class="card"
          :class="`card_${cardTyle}`"
          v-for="(list, i) in (showMore ? data.educateList.slice(0, 6) : data.educateList)"
          :key="list.id"
          :href="list.linkUrl">
          <img class="card_img" :src="list.imgUrl" alt="">
          <div class="card-text" :style="randomStyle(list.bgColor, i)">
            <div class="title" :class="`cut_font_${({ 1: '1', 2: '2', 3: '2', 4: '2', 5: '2', 6: '1' })[cardTyle] || 1}`">{{ list.title }}</div>
            <div v-if="showDescription" class="des cut_font_2">{{ list.assistTitle || '' }}</div>
          </div>
        </a>
      </template>
      <div class="empty" v-else-if="showEmptyText">暂无内容</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'AreaCard',
    props: {
        data: {
            type: Object,
            default: () => ({})
        },
        /**
         * 卡片样式类型
         * 1: 单栏，卡片背景色四色随机
         * 2: 双栏
         * 3: 单栏，图片不留边距
         * 4: 单栏，图片宽度加长
         * 5: 单栏，图片比文字框高
         * 6: 单栏，纯图片
         */
        cardTyle: {
            type: [String, Number],
            default: 2
        },
        showTitle: {
            type: Boolean,
            default: true
        },
        showMore: {
            type: Boolean,
            default: true
        },
        showEmptyText: {
            type: Boolean,
            default: true
        },
        showRandomBgColor: {
            type: Boolean,
            default: false
        },
        showDescription: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        randomStyle (bgColor, i) {
            const randomColors = ['#E7FAEE', '#FBF4E5', '#DCF4FE', '#FCF3E8']
            if (['1'].includes(String(this.cardTyle))) return `background: ${bgColor || randomColors[i % 4]}`
            if (!bgColor) return ''
            if (['3', '4', '5'].includes(String(this.cardTyle))) return `background: ${bgColor}`
            return ''
        }
    }
}
</script>

<style lang="less">
.area-card {
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
    .more {
      min-width: 35px;
      color: #999;
      font-size: 12px;
      margin: auto 0;
      display: flex;
      img {
        width: 7px;
        height: 13px;
        margin: auto 0;
        margin-left: 4px;
      }
    }
  }
  .area-content {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    .card {
      width: calc(50% - 5px);
      margin-right: 10px;
      margin-bottom: 9px;
      text-decoration: none;
      color: #333;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .card_img {
        width: 167px;
        height: 91px;
        object-fit: cover;
      }
      .card-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 0 4px 4px 0;
        .title {
          font-size: 13px;
          line-height: 1.2;
          margin-top: 6px;
          font-weight: 500;
        }
        .des {
          margin-top: 4px;
          color: #9A9A9A;
          font-size: 11px;
          line-height: 1.2;
        }
      }
      &_1 {
        position: relative;
        width: 100%;
        margin-bottom: 11px;
        .card_img {
          width: 70px;
          height: 92px;
          object-fit: cover;
          position: absolute;
          margin: 4px 0;
          left: 0;
          top: 0;
        }
        .card-text {
          width: 307px;
          height: 100px;
          padding: 15px;
          box-sizing: border-box;
          margin-left: 35px;
          border-radius: 8px;
          .title {
            margin-left: 30px;
            width: calc(100% - 30px);
            font-size: 17px;
            margin-bottom: 12px;
            margin-top: 0;
          }
          .des {
            margin-top: 0;
            margin-left: 30px;
            font-size: 14px;
          }
        }
      }
      &_2 {

      }
      &_3 {
        width: 100%;
        margin-bottom: 11px;
        margin-right: 0;
        display: flex;
        .card_img {
          width: 73px;
          height: 100px;
          object-fit: cover;
        }
        .card-text {
          width: calc(100% - 73px);
          height: 100px;
          padding: 11px;
          box-sizing: border-box;
          background: #F9F5F1;
          .title {
            font-size: 17px;
            margin-bottom: 10px;
            margin-top: 0;
          }
          .des {
            margin-top: 0;
            font-size: 13px;
          }
        }
      }
      &_4 {
        width: 100%;
        margin-bottom: 11px;
        margin-right: 0;
        display: flex;
        .card_img {
          width: 141px;
          height: 100px;
          object-fit: cover;
        }
        .card-text {
          width: calc(100% - 141px);
          height: 100px;
          padding: 10px 15px;
          box-sizing: border-box;
          .title {
            font-size: 15px;
            margin-bottom: 18px;
            margin-top: 0;
          }
          .des {
            margin-top: 0;
            font-size: 11px;
          }
        }
      }
      &_5 {
        width: 100%;
        margin-bottom: 11px;
        margin-right: 0;
        position: relative;
        margin-top: 15px;
        .card_img {
          width: 70px;
          height: 114px;
          object-fit: cover;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .card-text {
          width: calc(100% - 60px);
          margin-left: 60px;
          height: 100px;
          padding: 12px 10px;
          padding-left: 22px;
          box-sizing: border-box;
          background: #FBE7E7;
          .title {
            font-size: 17px;
            margin-bottom: 3px;
            margin-top: 0;
          }
          .des {
            margin-top: 0;
            font-size: 14px;
          }
        }
      }
      &_6 {
        width: 100%;
        margin-bottom: 11px;
        margin-right: 0;
        .card_img {
          width: 100%;
          height: 98px;
          object-fit: cover;
        }
        .card-text {
          display: none;
        }
      }
    }
    .empty {
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
