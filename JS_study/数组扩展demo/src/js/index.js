// 假设后端已经传数据过来
var personArr = [
    {name: '孙笑川', src: './src/img/sundog.jpg', des: '我是你哥哥', sex: 'm', age: 20},
    {name: '药水哥', src: './src/img/liubo.jpg', des: '我是孙🐶的弟弟', sex: 'm', age: 25},
    {name: '吴亦凡', src: './src/img/kirs.jpg', des: 'Bad Girl!', sex: 'm', age: 27},
    {name: '蔡徐坤', src: './src/img/cxk.jpg', des: '长得帅也是一种错🐎', sex: 'f', age: 21},
    {name: '蔡广坤', src: './src/img/xgk.jpg', des: '我在美国的校队', sex: 'f', age: 45},
];
// 初始化变量
var oUl = document.getElementsByTagName('ul')[0];
    oInput = document.getElementsByTagName('input')[0],
    obtnArr = document.getElementsByClassName('btn'),
    btnArr = [].slice.call(obtnArr, 0),
    lastBtn = obtnArr[2],
    store.subscribe(function() {
        renderData(lastFilterArr(personArr));
    })
// 数据渲染函数
function renderData(oArr) {
    var lastHtml = "";
    oUl.innerHtml = "";
    oArr.forEach(function(ele) {
        lastHtml += '<li>' + '<img src="' + ele.src  + '">' + '</img>' + '<p class="name">' + ele.name + '</p>' + '<p class="des">' + ele.des + '</p>' +'</li>'
        // console.log(ele);
    },oUl)
    oUl.innerHTML = lastHtml;
    // console.log(lastHtml);
}
renderData(personArr);
// input行为
oInput.oninput = debounce(function() {
    store.dispatch({type: 'text', value: this.value});
}, 500)
// 按钮行为
btnArr.forEach(function(ele) {
    ele.onclick = function() {
        selectBtn(this);
        store.dispatch({type: 'sex', value: this.getAttribute('sex')});
    }
})
// 按钮状态变化函数
function selectBtn(curBtn) {
    curBtn.className = 'btn active';
    lastBtn.className = 'btn';
    lastBtn = curBtn;
}