// 初始化函数
function init() {
    bindEvent();
    renderTable();
}
var dialog = document.getElementsByClassName('dialog')[0];
var tableData = [];
// 绑定事件函数
function bindEvent() {
    var menuList = document.getElementsByClassName('menu-list')[0];
    menuList.addEventListener('click', changeMenu, false);
    var addStudentBtn = document.getElementById('add-student-btn');
    addStudentBtn.addEventListener('click', addStudent, false);
    var tBody = document.getElementById('data-table');
    tBody.addEventListener('click', buttonClick, false);
    var mask = document.getElementsByClassName('mask')[0];
    mask.onclick = function() {
        dialog.classList.remove('show');
    }
    var editStudentBtn = document.getElementById('edit-student-btn');
    editStudentBtn.addEventListener('click', editStudent, false);
}
// 点击按钮行为
function buttonClick(e) {
    var tagName = e.target.tagName.toLowerCase();
    // console.log(tagName, e.target);
    if(tagName != 'button') {
        return false;
    }
    if(tagName == 'button' && e.target.className.indexOf('edit') != -1) {
        // console.log(1);
        editShow(e.target);
    }
    if(tagName == 'button' && e.target.className.indexOf('del') != -1) {
        // console.log(2);
        delShow(e.target);
    }
}
// 编辑行为
function editShow(dom) {
    dialog.classList.add('show');
    var index = dom.getAttribute('data-id');
    renderForm(tableData[index]);
}
// 删除行为
function delShow(dom) {
    var index = dom.getAttribute('data-id');
    transformData('/api/student/delBySno', {
        sNo: tableData[index].sNo
    }, function() {
        var isDel = confirm('是否删除?');
        if(isDel) {
            var list = document.getElementsByClassName('list')[0];
            list.click();
        }else {
            return false;
        }
    })
}
// 编辑信息时信息回填
function renderForm(data) {
    var form = document.getElementById('edit-student-form');
    for(var prop in data) {
        if(form[prop]) {
            form[prop].value = data[prop];
        }
    }
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
        tableData = data;
        var str = '';
        data.forEach(function(ele, index) {
            str += '<tr>\
            <td>'+ ele.sNo +'</td>\
            <td>' + ele.name +'</td>\
            <td>' + (ele.sex ? '女' : '男') + '</td>\
            <td>' + ele.email + '</td>\
            <td>' + (new Date().getFullYear() - ele.birth) + '</td>\
            <td>' + ele.phone + '</td>\
            <td>' + ele.address + '</td>\
            <td>\
                <button class="btn edit" data-id=' + index + '>编辑</button>\
                <button class="btn del" data-id=' + index + '>删除</button>\
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
// 提交按钮合并
// function submitBtn(e, str) {
//     e.preventDefault();
//     var form = document.getElementById(str + '-student-form');
//     var data = getFormData(form);
//     if(!data) {
//         return false;
//     }
//     if(str == 'edit') {
//         transformData('/api/student/updateStudent', data, function() {
//             form.reset();   
//             var isTurnPage = confirm('修改成功, 是否跳转页面?');
//             if(isTurnPage) {
//                 var studentListTab = document.getElementsByClassName('list')[0];
//                 studentListTab.click();
//                 var mask = document.getElementsByClassName('mask')[0];
//                 mask.click();
//             }
//         })
//     }
//     if(str == 'add') {
//         transformData('/api/student/addStudent', data, function() {
//             form.reset();   
//             var isTurnPage = confirm('提交成功, 是否跳转页面?');
//             if(isTurnPage) {
//                 var studentListTab = document.getElementsByClassName('list')[0];
//                 studentListTab.click();
//             }
//         })
//     }
// }
// 编辑学生提交按钮
function editStudent(e) {
    // 清除一下默认的提交刷新页面
    e.preventDefault();
    var form = document.getElementById('edit-student-form');
    var data = getFormData(form);
    if(!data) {
        return false;
    }
    transformData('/api/student/updateStudent', data, function() {
        form.reset();   
        var isTurnPage = confirm('修改成功, 是否跳转页面?');
        if(isTurnPage) {
            var studentListTab = document.getElementsByClassName('list')[0];
            studentListTab.click();
            var mask = document.getElementsByClassName('mask')[0];
            mask.click();
        }
    })
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
    var name = form.name.value,
        sNo = form.sNo.value,
        birth = form.birth.value,
        sex = form.sex.value,
        phone = form.phone.value,
        email = form.email.value,
        address = form.address.value;
    var reg = /^[0-9A-Za-z][\.-_0-9A-Za-z]*@[0-9A-Za-z]+(\.[0-9A-Za-z]+)+$/;
    if (!name || !sNo || !birth || !phone || !email || !address) {
        alert('部分数据未填写，请填写完成后提交');
        return false;
    }
    if(sNo.length < 4 || sNo.length > 16) {
        alert('学号长度错误, 应为4-16位');
        return false;
    }
    if(phone.length != 11) {
        alert('手机号长度应为11位');
        return false;
    }
    if(!reg.test(email)) {
        alert('邮箱格式错误');
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
        return result;
    }else {
        alert(result.msg);
    }
}
init();