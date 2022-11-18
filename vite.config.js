import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'
import postCssPxToRem from 'postcss-pxtorem'

export default defineConfig({
    base: './',
    plugins: [createVuePlugin()],
    resolve: {
        alias: [{
            find: '@',
            replacement: '/src'
        }]
    },
    css: {
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 37.5, // 1rem的大小
                    propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
                })
            ]
        }
    }
})