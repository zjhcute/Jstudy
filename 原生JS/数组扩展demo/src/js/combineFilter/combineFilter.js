function combineFilter(config) {
    return function(data) {
        for(prop in config) {
            data = config[prop](data, store.getState(prop));
        }
        // console.log(data);
        return data;
    }
}
var lastFilterArr = combineFilter({
    text: filterByText,
    sex: filterBySex
})