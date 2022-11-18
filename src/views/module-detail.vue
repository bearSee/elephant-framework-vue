<template>
  <div class="module-detail">
    <page-head :title="moduleName"></page-head>
    <div class="detail-content">
      <component
        v-if="componentName"
        :is="componentName"
        :moduleName="moduleName"
        :data="moduleData">
      </component>
      <div v-if="isLoading" class="no_more_data">一大波数据正在赶来...</div>
      <div v-else class="no_more_data">呀～到底啦！不如去看看其它精彩内容～</div>
    </div>
  </div>
</template>

<script>
import { getModuleList } from '@/api/module.js'
import pageHead from '@/components/page-head.vue'
import expertsOnline from '@/components/experts-online.vue'
import psychologyDevelopment from '@/components/psychology-development.vue'
import societyDevelopment from '@/components/society-development.vue'
import studyDevelopment from '@/components/study-development.vue'

export default {
    name: 'ModuleDetail',
    components: {
        psychologyDevelopment,
        societyDevelopment,
        studyDevelopment,
        expertsOnline,
        pageHead
    },
    data () {
        const { moduleId, moduleName } = this.$route.query
        return {
            moduleId,
            moduleName,
            moduleData: [],
            componentName: '',
            isLoading: true
        }
    },
    methods: {
    },
    created () {
        if (!this.moduleId) return
        this.isLoading = true
        getModuleList(this.moduleId).then((res) => {
            this.moduleData = res?.data || []
            this.componentName = ({
                // 社会力发展
                1: 'societyDevelopment',
                // 心理健康
                2: 'psychologyDevelopment',
                // 学习力发展
                3: 'studyDevelopment',
                // 专家在线
                4: 'expertsOnline'
            })[this.moduleId]
        }).finally(() => {
            this.isLoading = false
        })
    }
}
</script>
<style lang="less">
.module-detail {
    .page-head {
    }
    .detail-content {
        overflow-y: auto;
        height: calc(100vh - 52px);
        padding: 0 17px;
        .page-banner {
            width: 342px;
            min-height: 125px;
            object-fit: cover;
            background: #f8f8f8;
            border: 0;
        }
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
