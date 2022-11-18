<!-- 学习力发展 -->
<template>
  <div class="study-development">
    <img class="page-banner" :src="(bannerData?.educateList || [])[0]?.imgUrl" alt="">
    <area-card
      v-for="d in cardData"
      :key="d.type"
      :data="d"
      :cardTyle="d.styleType || cardTyles[d.type] || 2"
      :showMore="['15', '16'].includes(String(d.type))"
      @view-more="handlerViewMore(d.type)">
    </area-card>
  </div>
</template>

<script>
import areaCard from '@/components/area-card.vue'

export default {
    name: 'StudyDevelopment',
    components: { areaCard },
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    data () {
        return {
            bannerData: this.data.find(({ type }) => String(type) === '20'),
            cardData: this.data.filter(({ type }) => String(type) !== '20'),
            cardTyles: {
                // 亲子教育 type: 13  卡片样式 2
                13: '2',
                // 认知力训练 type: 14  卡片样式 1
                14: '1',
                // 科普知识 type: 15  卡片样式 2
                15: '2',
                // 心理健康 type: 16  卡片样式 3
                16: '3',
                // 为您推荐 type: 17  卡片样式 2
                17: '2'
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
.study-development {
}
</style>
