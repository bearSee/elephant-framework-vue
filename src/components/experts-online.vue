<!-- 专家在线 -->
<template>
  <div class="experts-online">
    <img class="page-banner" :src="(bannerData?.educateList || [])[0]?.imgUrl" alt="">
    <expert-words-card :data="expertWordsData"></expert-words-card>
    <area-card
      v-for="d in cardData"
      :key="d.type"
      :data="d"
      :cardTyle="d.styleType || cardTyles[d.type] || 2"
      :showMore="false">
    </area-card>
  </div>
</template>

<script>
import areaCard from '@/components/area-card.vue'
import expertWordsCard from '@/components/expert-words-card.vue'

export default {
    name: 'ExpertsOnline',
    components: { areaCard, expertWordsCard },
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    data () {
        return {
            bannerData: this.data.find(({ type }) => String(type) === '21'),
            cardData: this.data.filter(({ type }) => !['21', '2'].includes(String(type))),
            expertWordsData: this.data.find(({ type }) => ['2'].includes(String(type))) || {},
            cardTyles: {
                // 小象咨询 type: 4  卡片样式 6
                4: '6',
                // 专家精品课 type: 3  卡片样式 4
                3: '4'
            }
        }
    }
}
</script>

<style lang="less">
.experts-online {
}
</style>
