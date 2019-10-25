export default {
    namespaced: true,
    state: {
        taskList: [
            {
                title: '猎杀A区大眼怪',
                level: 'A',
                describe: 'A区西南方出现大眼怪, 破坏了很多建筑物, 暂未出现人员伤亡, 请迅速前往',
                id: 34343334
              },
              {
                title: '收集晶龙汗液结晶一千克',
                level: 'S',
                describe: '收集晶龙汗液结晶一千克, 用于魔法物品的制作',
                id: 123213213
              },
              {
                title: '活捉一只喷水狗幼崽',
                level: 'C',
                describe: '喷水狗是一种常见的野外怪物, 但性格可爱, 亲人, 没有攻击性, 很多人会选择当宠物',
                id: 1233244214
              }
        ]
    },
    getters: {

    },
    mutations: {
        submitTask(state, payLoad) {
            state.taskList.push(payLoad);
            // console.log(name);
        }
    },
    actions: {
        submitTask({commit}, payLoad) {
            setTimeout(() => {
              commit('submitTask', payLoad)
            }, 1000)
        }
    }
}