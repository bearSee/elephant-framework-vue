<!-- 社会力发展 -->
<template>
  <div class="society-development">
    <img class="page-banner" :src="(bannerData?.educateList || [])[0]?.imgUrl" alt="">
    <area-card
      v-for="d in cardData"
      :key="d.type"
      :data="d"
      :cardTyle="d.styleType || cardTyles[d.type] || 2"
      :showMore="['8', '10', '11'].includes(String(d.type))"
      @view-more="handlerViewMore(d.type)">
    </area-card>
  </div>
</template>

<script>
import areaCard from '@/components/area-card.vue'

export default {
    name: 'SocietyDevelopment',
    components: { areaCard },
    props: {
        data: {
            type: Array,
            default: () => ([])
        }
    },
    data () {
        return {
            bannerData: this.data.find(({ type }) => String(type) === '18'),
            cardData: this.data.filter(({ type }) => String(type) !== '18'),
            cardTyles: {
                // 亲子教育 type: 8  卡片样式 2
                8: '2',
                // 幸福力训练 type: 9  卡片样式 1
                9: '5',
                // 科普知识 type: 10  卡片样式 2
                10: '2',
                // 心理健康 type: 11  卡片样式 3
                11: '3',
                // 为您推荐 type: 12  卡片样式 2
                12: '2'
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
.society-development {
}
</style>
