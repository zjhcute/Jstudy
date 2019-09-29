import {data} from "./data.js";
function init() {
    createDom();
    renderData(data);
    bindEvent()
}
function createDom() {
    let $content = $('.content');
    let $ul = $('<ul></ul>');
    $content.append($ul);
}
function renderData(oData) {
    let liStr = '';
    let $ul = $('ul');
    oData.forEach((ele, index) => {
        liStr += `
            <li>
                <span>${ele.name}</span>
                <span>${ele.age}</span>
                <span>${ele.introduce}</span>
            </li>
        `
    })
    $ul.html(liStr);
}
function bindEvent() {
    let $btn = $('.btn');
    $btn.on('click', () => {
        data[1].introduce = '张佳和的室友1号';
        data[2].introduce = '张佳和的室友2号';
        data[3].introduce = '张佳和的室友3号';
        renderData(data);
    })
}
init();
