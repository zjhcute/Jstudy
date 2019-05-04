function createStore(initialState) {
    var state = initialState || {};
    var list = [];
    function getState (type) {
        return state[type];
    }
    function dispatch(action) {
        state[action.type] = action.value;
        list.forEach(function(ele) {
            ele();
        })
    }
    function subscribe(func) {
        list.push(func);
    }
    return {
        getState: getState,
        dispatch: dispatch,
        subscribe: subscribe
    }
}
var store = createStore({text: '', sex: 'a'});