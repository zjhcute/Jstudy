var nowPage = 1,
    pageSize = 3,
    count = 0,
    tableData = [];
// 绑定事件函数
function bindEvent() {
    // 左侧菜单栏切换
    $('.menu-list').on('click', 'dd', function() {
        var self = this;
        $(this).addClass('active')
                .siblings().removeClass('active');
        $('.' + $(this).siblings('dd').data('id')).fadeOut(300, function() {
            $('.' + $(self).data('id')).fadeIn(300);
        });
        if($(this).hasClass('list')) {
            $('#data-table').empty();
            renderData();
        }
    })
    // 新增学生提交
    $('#add-student-btn').on('click', function(e) {
        // 阻止默认的刷新事件
        e.preventDefault();
        // 获取表单的全部数据
        var data = $('#add-student-form').serializeArray();
        // 把数据加工成一个对象
        data = formatData(data);
        transformData('/api/student/addStudent', data,
            function (res) {
                $('#add-student-form')[0].reset();
                var isTurnPage = confirm('添加成功是否跳转?');
                if(isTurnPage) {
                    $('.list').trigger('click');
                }
            }
        )
    })
    // 编辑删除学生按钮
    $('#data-table').on('click', '.edit', function() {
        var index = $(this).data('id')
        $('.dialog').slideDown(500);
        renderForm(tableData[index]);
    })
    // 遮罩层点击事件
    $('.mask').on('click', function() {
        $('.dialog').slideUp(500);
    })
    // 修改学生提交
    $('#edit-student-btn').on('click', function(e) {
        // 阻止默认的刷新事件
        e.preventDefault();
        // 获取表单的全部数据
        var data = $('#edit-student-form').serializeArray();
        // 把数据加工成一个对象
        data = formatData(data);
        transformData('/api/student/updateStudent', data,
            function (res) {
                alert('修改成功');
                $('.mask').trigger('click');
                $('.list').trigger('click');
            }
        )
    })
    // 删除学生按钮
    $('#data-table').on('click', '.del', function() {
        var isDel = confirm('是否要删除该学生?');
        if(isDel) {
            var index = $(this).data('id')
            transformData('/api/student/delBySno', {appkey: '15797954828_1556959447798', sNo: tableData[index].sNo},
                function (res) {
                    alert('删除成功');
                    $('.list').trigger('click');
                }
            )
        }
    })
    // 搜索学生按钮
    $('.search-btn').on('click', function() {
        var val = $('#search').val();
        if(!val) {
            $('.list').trigger('click');
            $('.search-span').text('');
        }else {
            filterData(val);
        }
    })
    
}
// 格式化form表单数据
function formatData(data) {
    var newData = {};
    data.forEach(function(ele, index) {
        newData[ele.name] = ele.value;
    })
    // 添加appkey
    $.extend(newData, {appkey: '15797954828_1556959447798'});
    // console.log(newData);
    return newData;
}
//  渲染数据
function renderData() {
    transformData('/api/student/findByPage', 
        {appkey: '15797954828_1556959447798', page: nowPage, size: pageSize},
        function(res) {
            count = res.data.cont;
            renderTable(res.data.findByPage);
            turnPage(count, pageSize, nowPage);
        }
    )
}
// 请求数据
function transformData(url, data, callBack) {
    $.ajax({
        type: "get",
        url: "http://api.duyiedu.com" + url,
        data: data,
        dataType: "json",
        success: callBack
    })
}
// 渲染表格
function renderTable(data) {
    $('#data-table').empty();
    tableData = data;
    tableData.forEach(function(ele, index) {
        $('<tr>\
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
        </tr>').appendTo('#data-table');
    })
}
// 回填表单函数
function renderForm(data) {
    var form = $('#edit-student-form')[0];
    for(var prop in data) {
        if(form[prop]) {
            form[prop].value = data[prop];
        }
    }
}
// 查询过滤数据
function filterData(val) {
    transformData('/api/student/searchStudent', 
            {
                appkey: '15797954828_1556959447798',
                sex: -1,
                search: $('#search').val(),
                page: nowPage,
                size: pageSize
            },
            function(res) {
                // console.log(res);
                renderTable(res.data.searchList);
                $('.search-span').text('查询结果如下, 查询到' + res.data.cont + '条数据');
            }
        )
}
// 生成分页
function turnPage(count, pageSize, now) {
    $('.page-wrapper').Page({
        allPageSize: count,
        pageSize: pageSize,
        nowPage: now,
        changePageCb: function(pageInfo) {
            nowPage = pageInfo.nowPage;
            pageSize = pageInfo.pageSize;
            renderData();
        }
    })
}
function init() {
    renderData();
    bindEvent();
}
init();