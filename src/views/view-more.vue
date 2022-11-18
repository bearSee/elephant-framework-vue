<template>
  <div class="view-more">
    <page-head title="更多" :home="false"></page-head>
    <div class="detail-content">
      <area-card
        :data="cardData"
        :cardTyle="3"
        :showRandomBgColor="true"
        :showTitle="false"
        :showMore="false"
        :showEmptyText="false">
      </area-card>
      <div v-if="isLoading" class="no_more_data">一大波数据正在赶来...</div>
      <div v-else-if="(cardData?.educateList || []).length" class="no_more_data">呀～到底啦！不如去看看其它精彩内容～</div>
    </div>
  </div>
</template>

<script>
import { getContentList } from '@/api/module.js'
import areaCard from '@/components/area-card.vue'
import pageHead from '@/components/page-head.vue'

export default {
    name: 'ViewMore',
    components: { pageHead, areaCard },
    data () {
        return {
            isLoading: true,
            bgColors: {
                // 亲子教育
                6: '#F8ECEC',
                // 亲子教育
                8: '#F8ECEC',
                // 科普知识
                10: '#F9F5F1',
                // 科普知识
                15: '#EBF3FC',
                // 心理健康
                11: '#F9F5F1',
                // 心理健康
                16: '#F9F5F1'
            },
            cardData: {
                educateList: []
            }
        }
    },
    methods: {
        // getImageUrl (src) {
        //     return new URL(src, import.meta.url).href
        // },
        getCardData () {
            const { type } = this.$route.query
            if (type !== 0 && !type) {
                this.isLoading = false
                return
            }
            this.isLoading = true
            getContentList(type).then((res) => {
                this.cardData = {
                    educateList: (res?.data || []).map(d => ({ ...d, bgColor: this.bgColors[type], imgUrl: d.remark })).slice(6)
                }
            }).finally(() => {
                this.isLoading = false
            })
        }
    },
    created () {
        this.getCardData()
    }
}
</script>

<style lang="less">
.view-more {
    .detail-content {
        overflow-y: auto;
        height: calc(100vh - 52px);
        padding: 0 17px;
    }
    .no_more_data {
        font-size: 11px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #CCCCCC;
        line-height: 16px;
        margin: 40px 0;
        text-align: center;
    }
}
</style>
