function filterBySex(data, sex) {
    if(sex == 'a') {
        return data;
    }else if(sex == 'm') {
        return data.filter(function(ele) {
            return ele.sex == 'm';
        })
    }else {
        return data.filter(function(ele) {
            return ele.sex == 'f';
        })
    }
}