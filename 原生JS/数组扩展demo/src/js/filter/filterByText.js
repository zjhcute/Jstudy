// 文本数据过滤函数
function filterByText(data, text) {
    if(!text) {
        return data;
    }else {
        return data.filter(function(ele) {
            return ele.name.indexOf(text) != -1;
        })
    }
}