export default {
    namespaced: true,
    state: {
        heroList: [
            {
                name: '切格瓦拉',
                power: ['藏匿'],
                nickName: '精神领袖',
                sex: '男',
                age: 28,
                belong: '偷窃大联盟'
            },
            {
                name: '赛库',
                power: ['超乎常人的强壮'],
                nickName: '钢铁堡垒',
                sex: '男',
                age: 32,
                belong: '钢铁家族'
            },
            {
                name: '安吉丽娜现男友',
                power: ['灵活'],
                nickName: '白面书生',
                sex: '男',
                age: 22,
                belong: '安吉丽娜粉丝团'
            }
        ]
    },
    getters: {
        handleHeroList(state) {
            return state.heroList.map(hero => `姓名: ${hero.name} 外号: ${hero.nickName}`)
        }
    },
    mutations: {

    },
    actions: {
        
    }
}