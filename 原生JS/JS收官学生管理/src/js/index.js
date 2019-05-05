// 初始化函数
function init() {
    bindEvent();
    renderTable();
}
// 绑定事件函数
function bindEvent() {
    var menuList = document.getElementsByClassName('menu-list')[0];
    menuList.addEventListener('click', changeMenu, false);
    var addStudentBtn = document.getElementById('add-student-btn');
    addStudentBtn.addEventListener('click', addStudent, false);
}
// 点击左侧导航栏行为函数
function changeMenu(e) {
    var tagName = e.target.tagName;
    if(tagName == 'DD') {
        initMenuCss(e.target);
    }
    var id = e.target.getAttribute('data-id');
    var content = document.getElementById(id);
    initContentCss(content);
    if(id == 'student-list') {
        renderTable();
    }
}
// 渲染右侧数据
function renderTable() {
    transformData('/api/student/findAll', '', function(res) {
        var data = res.data;
        var str = '';
        data.forEach(function(ele) {
            var sex = '';
            if(ele.sex == 0) {
                sex = '男';
            }else {
                sex = '女';
            }
            str += '<tr>\
            <td>'+ ele.sNo +'</td>\
            <td>' + ele.name +'</td>\
            <td>' + sex + '</td>\
            <td>' + ele.email + '</td>\
            <td>' + ele.birth + '</td>\
            <td>' + ele.phone + '</td>\
            <td>' + ele.address + '</td>\
            <td>\
                <button class="btn edit">编辑</button>\
                <button class="btn del">删除</button>\
            </td>\
        </tr>'
        })
        var tBody = document.getElementById('data-table');
        tBody.innerHTML = str;
    })
}
// 初始化左侧菜单css
function initMenuCss(oDom) {
    var active = document.getElementsByClassName('active');
    for(var i = 0; i < active.length; i ++) {
        active[i].classList.remove('active');
    }
    oDom.classList.add('active');
}
// 初始化内容区css
function initContentCss(oDom) {
    var active = document.getElementsByClassName('content-active');
    for(var i = 0; i < active.length; i ++) {
        active[i].classList.remove('content-active');
    }
    oDom.classList.add('content-active');
}
// 编辑函数
function dialogShow() {
    var dialog = document.getElementsByClassName('dialog')[0];
    dialog.classList.add('show');
}
// 新增学生提交 
function addStudent(e) {
    // 清除一下默认的提交刷新页面
    e.preventDefault();
    var form = document.getElementById('add-student-form');
    var data = getFormData(form);
    if(!data) {
        return false;
    }
    transformData('/api/student/addStudent', data, function() {
        form.reset();   
        var isTurnPage = confirm('提交成功, 是否跳转页面?');
        if(isTurnPage) {
            var studentListTab = document.getElementsByClassName('list')[0];
            studentListTab.click();
        }
    })
}
// 获取表单数据 
function getFormData(form) {
    var name = form.name.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var sex = form.sex.value;
    var phone = form.phone.value;
    var email = form.email.value;
    var address = form.address.value;
    if (!name || !sNo || !birth || !phone || !email || !address) {
        alert('部分数据未填写，请填写完成后提交');
        return false;
    }
    return {
        name: name,
        sNo: sNo,
        birth: birth,
        sex: sex,
        phone: phone,
        email: email,
        address: address,
    }
} 
// 保存数据
function saveData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object'){
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}
// 数据交互
function transformData(url, data, callback) {
    if(!data) {
        data = {};
    }
    var result = saveData('http://api.duyiedu.com' + url, Object.assign(data, {
        appkey: '15797954828_1556959447798'
    }));
    if(result.status == 'success') {
        callback(result);
    }else {
        alert(result.msg);
    }
    return result;
}
init();