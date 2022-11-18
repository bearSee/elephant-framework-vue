import service from '../utils/request.js'

// id: 模块id
export const getModuleList = id => {
    return service({
        url: '/educate/api/module/moduleList',
        method: 'POST',
        data: { id }
    })
}
/**
 * type: 列表类型
 * 1:首页模块；
 * 2：专家说(专家在线)；
 * 3：专家精品课(专家在线)；
 * 4：小象咨询(专家在线)；
 * 5：成长训练(心理健康发展)；
 * 6：亲子教育(心理健康发展)；
 * 7：心理热线(心理健康发展)；
 * 8：亲子教育(社会力发展)；
 * 9：幸福力训练(社会力发展)；
 * 10：科普知识(社会力发展)；
 * 11：心理健康(社会力发展)；
 * 12：为您推荐(社会力发展)；
 * 13：亲子教育(学习力发展)；
 * 14：认知力训练(学习力发展)；
 * 15：科普知识(学习力发展)；
 * 16：心理健康(学习力发展)；
 * 17：为您推荐(学习力发展)；
 * 18：社会力发展Banner;
 * 19：心理健康banner
 * 20：学习力发展banner;
 * 21：专家在线banner;
 */
export const getContentList = type => {
    return service({
        url: '/educate/api/module/educateList',
        method: 'POST',
        data: { type }
    })
}
