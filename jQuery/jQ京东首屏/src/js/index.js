// 导航栏下拉菜单
$('.my-jd').dropDown({
    width: 70,
    height: 24,
    padLeft: 15,
    padTop: 10,
    position: 'right',
    direction: 'y',
    linkTitle: '我的京东',
    menuList: [
        {
            title: '',
            column: 2,
            content: ['待处理订单', '消息', '返修退换货', '我的问答', '降价商品', '我的关注']
        },
        {
            title: '',
            column: 2,
            content: ['我的京豆', '我的优惠券', '我的白条', '我的理财']
        }
    ]
});
$('.company').dropDown({
    width: 70,
    height: 24,
    padLeft: 15,
    padTop: 10,
    position: 'right',
    direction: 'y',
    linkTitle: '企业采购',
    menuList: [
        {
            title: '',
            column: 2,
            content: ['企业购', '商业场景管', '工业品', '礼品卡']
        }
    ]
});
$('.service').dropDown({
    width: 70,
    height: 24,
    padLeft: 15,
    padTop: 10,
    position: 'left',
    direction: 'y',
    linkTitle: '客户服务',
    menuList: [
        {
            title: '客户',
            column: 2,
            content: ['帮助中心', '售后服务', '在线客服', '意见建议', '电话客服', '客服邮箱', '金融咨询', '全球售客服']
        },
        {
            title: '商户',
            column: 2,
            content: ['合作招商', '成长中心', '商家后台', '京麦工作台', '商家帮助', '规则平台']
        }
    ]
});
$('.website').dropDown({
    width: 70,
    height: 24,
    padLeft: 15,
    padTop: 10,
    position: 'left',
    direction: 'x',
    linkTitle: '网站导航',
    menuList: [
        {
            title: '特色主题',
            column: 4,
            content: ['京东试用', '京东金融', '全球售', '国际站', '京东会员', '京东预售', '买什么', '俄语站', '装机大师', '0元评测', '港澳售', '优惠券', '秒杀', '闪购', '印尼站', '京东金融科技', '陪伴计划', '出海招商', '拍拍二手']
        },
        {
            title: '行业频道',
            column: 3,
            content: ['手机', '智能数码', '玩3c', '电脑办公', '家用电器', '京鱼座智能', '服装城', '京东生鲜', '家装城', '母婴', '食品', '农资频道', '整车', '图书', '劳动防护']
        },
        {
            title: '生活服务',
            column: 3,
            content: ['京东众筹', '白条', '京东金融App', '京东小金库', '理财', '话费', '水电煤', '彩票', '旅行', '机票酒店', '电影票', '京东到家', '游戏', '拍拍回收']
        },
        {
            title: '更多精选',
            column: 3,
            content: ['合作招商', '京东通信', '京东E卡', '企业采购', '服务市场', '办公生活馆', '乡村招募', '校园加盟', '京东社区', '游戏社区', '知识产权维护']
        }
    ]
});
// 左侧菜单渲染

// 中间大的轮播图
$('.content-swiper').swiper({
    imgList: [
        'https://img1.360buyimg.com/pop/s590x470_jfs/t1/40734/18/8824/86038/5d230f40Ebc01ef8c/27eb80950572245c.jpg!q90!cc_590x470.webp',
        'https://img10.360buyimg.com/babel/s590x470_jfs/t1/69525/34/4059/99907/5d22d80fE73a9f9e8/da8501dd1ca5be37.jpg!q90!cc_590x470.webp',
        'https://img1.360buyimg.com/da/s590x470_jfs/t1/67759/25/2910/78201/5d12c38cEcd1d35bf/b0a38ee7f33d09b9.jpg!q90!cc_590x470.webp',
        'https://imgcps.jd.com/ling/49231225190/5oiQ6ZW_5pyJ5L2g/MuS7tjfmipg/t-5bd91ac5a96f8a032f5bd708/c368db97.jpg',
        'https://img1.360buyimg.com/da/s590x470_jfs/t1/82333/20/4281/62152/5d26947bEe301bee8/6b8d87f299e2e591.jpg!q90!cc_590x470.webp',
        'https://img1.360buyimg.com/pop/s590x470_jfs/t1/57142/39/4463/75557/5d22e21aEe03e106c/fa653e79e2d1f480.jpg!q90!cc_590x470.webp',
        'https://img1.360buyimg.com/pop/s590x470_jfs/t28069/118/1489951671/92908/ff08fe33/5ce2022cN68e8728d.jpg!q90!cc_590x470.webp',
        'https://img1.360buyimg.com/pop/s590x470_jfs/t1/49967/9/4119/99059/5d1e19ffE9fc1c800/101bf1b749728008.jpg!q90!cc_590x470.webp'
        ],
    isAuto: true,
    animateType: 'fade',
})
// 
