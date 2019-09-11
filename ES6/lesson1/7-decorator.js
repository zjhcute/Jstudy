let oInp = document.getElementById('inp');
let oBtn = document.getElementById('btn');
class Search {
    constructor () {
        this.value = '';
    }
    url = 'url-A';
    getContent() {
        console.log('向' + this.url + '发送网络请求,' + '得到的数据是' + this.value);
    }
}
var oS = new Search();
oInp.onchange = function() {
    oS.value = this.value;
}
oBtn.onclick = function() {
    oS.getContent();
}
