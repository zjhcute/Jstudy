<template>
    <div class="my-footer">
        <div class="footer-nav">
            <div class="nav-list" v-for="(item, index) in footerList" :key="`${index}_0`">
                <dl>
                    <dt>{{ item.title }}</dt>
                    <dd v-for="(contItem, contIndex) in item.content" :key="`${index}_${contIndex}_1`"><router-link to="/">{{ contItem }}</router-link></dd>
                </dl>
            </div>
        </div>
        <div class="footer-copyright">
            <span>&copy;zjh美团练习项目</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            footerList: [
                {
                    title: '用户帮助',
                    content: ['申请退款', '查看美团券密码', '常见问题', '用户协议', '隐私政策', '反诈骗公告', '消费者权益保障', '反诈骗公告', '消费者权益保障']
                }, 
                {
                    title: '商家合作',
                    content: ['美食商家入驻(非外卖)', '美团外卖开店申请', '美团外卖收银官网', '美团点评餐饮学院', '外卖配送加盟申请', '酒店商家入驻']
                },
                {
                    title: '代理商加盟',
                    content: ['美团外卖代理商加盟', '到店餐饮加盟', '美团联盟', '美团点评']
                },
                {
                    title: '关注美团', 
                    content: ['美团新浪微博']
                },
                {
                    title: '消费者服务热线',
                    content: ['外卖消费者: 10109777', '猫眼消费者: 10105335', '其他消费者: 10107888']
                }
            ]
        }
    }
}
</script>

<style scoped lang="less">
    @import '../../assets/css/public/footer/footer.less';
</style>