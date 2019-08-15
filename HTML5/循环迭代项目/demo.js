(function() {
    // 模块化开发, 这个demo.js里面, 我们只是用来写ECharts的, 所以封闭作用域
    // 把方法挂在在对象上
    var obj = {
        option: {
            title : {
                // 需要定制化title
                text: '',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                // 需要定制化data
                orient: 'vertical',
                left: 'left',
                data: []
                // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    // 需要定制化name和data
                    name: '',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: [],
                    // data:[
                    //     {value:335, name:'直接访问'},
                    //     {value:310, name:'邮件营销'},
                    //     {value:234, name:'联盟广告'},
                    //     {value:135, name:'视频广告'},
                    //     {value:1548, name:'搜索引擎'}
                    // ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        },
        // 初始化函数
        init: function() {
            this.getData();
        },
        // 获取数据函数
        getData: function() {
            var self = this;
            $.ajax({
                url: 'http://api.duyiedu.com/api/student/findAll?appkey=15797954828_1556959447798',
                success: function(res) {
                    var dataList = JSON.parse(res);
                    // console.log(dataList);
                    // 创建地区饼图
                    self.getAreaChart(dataList);
                    // 创建性别饼图
                    self.getSexChart(dataList);
                },
                error: function(res) {
                    console.log(res.msg);
                }
            })
        },
        getAreaChart: function(dataList) {
            // 先要将dataList进行过滤
            var data = dataList.data;
            var obj = {};
            var legendData = [];
            var seriesData = [];
            data.forEach(function(ele, index) {
                // console.log(ele.address);
                if(!obj[ele.address]) {
                    obj[ele.address] = 1;
                    legendData.push(ele.address);
                }else {
                    obj[ele.address] ++;
                }
            })
            for(var prop in obj) {
                var tempObj = {};
                tempObj.name = prop;
                tempObj.value = obj[prop];
                // console.log(tempObj);
                seriesData.push(tempObj);
            }
            // console.log(seriesData, legendData);
            var myChart = echarts.init($('.area')[0]);
            this.option.title.text = '学生地区分布';
            this.option.legend.data = legendData;
            this.option.series.name = '城市名称';
            this.option.series[0].data = seriesData;
            myChart.setOption(this.option);
            // console.log(this.option);
        },
        getSexChart: function(dataList) {
            var data = dataList.data;
            // console.log(data);
            var sexData = [{name: '男', value: 0}, {name: '女', value: 0}];
            data.forEach(function(ele, index) {
                if(ele.sex == 0) {
                    sexData[0].value ++;
                }else {
                    sexData[1].value ++;
                }
                // console.log(typeof ele.sex);
            })
            // console.log(sexData);
            var myChart = echarts.init($('.sex')[0]);
            this.option.title.text = '学生性别比例';
            this.option.legend.data = ['男', '女'];
            this.option.series.name = '性别';
            this.option.series[0].data = sexData;
            console.log(this.option);
            myChart.setOption(this.option);
        }
    }
    obj.init();
})()