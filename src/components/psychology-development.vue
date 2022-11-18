<!-- 心理健康发展 -->
<template>
  <div class="psychology-development">
    <img class="page-banner" :src="(bannerData?.educateList || [])[0]?.imgUrl" alt="">
    <grow-training-card :data="growTrainingData"></grow-training-card>
    <area-card
      v-for="d in cardData"
      :key="d.type"
      :data="d"
      :cardTyle="d.styleType || cardTyles[d.type] || 2"
      :showMore="['6'].includes(String(d.type))"
      @view-more="handlerViewMore(d.type)">
    </area-card>
  </div>
</template>

<script>
import areaCard from '@/components/area-card.vue'
import growTrainingCard from '@/components/grow-training-card.vue'

export default {
    name: 'PsychologyDevelopment',
    components: { areaCard, growTrainingCard },
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    data () {
        return {
            bannerData: this.data.find(({ type }) => String(type) === '19'),
            cardData: this.data.filter(({ type }) => !['19', '5'].includes(String(type))),
            growTrainingData: this.data.find(({ type }) => ['5'].includes(String(type))) || {},
            cardTyles: {
                // 亲子教育 type: 6  卡片样式 2
                6: '2',
                // 心理热线 type: 7  卡片样式 6
                7: '6'
            }
        }
    },
    methods: {
        handlerViewMore (type) {
            this.$router.push({
                path: '/viewMore',
                query: { type }
            })
        }
    }
}
</script>

<style lang="less">
.psychology-development {
}
</style>
