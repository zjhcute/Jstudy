(function($) {
    var obj = {
        dataList: [],
        init: function() {
            this.bindEvent();   
        },
        bindEvent: function() {
            var self = this;
            $(window).on('hashchange', function() {
                var hash = location.hash;
                $('.right-content-items').css('display', 'none');
                $(hash).css('display', 'block');
            })
            $('.student-list').on('click', function() {
                self.getData('/api/student/findByPage',
                {
                    page: 1,
                    size: 10
                },function(res) {
                    var data = JSON.parse(res).data;
                    // console.log(data);
                    self.renderTable(data);
                }
                );
            })
            $('#add-student-btn').on('click', function() {
                var data = self.getFormData($('#add-student-form'));
                self.getData('/api/student/addStudent', data, function() {
                    var isTurn = confirm('添加成功, 是否跳转页面?');
                    if(isTurn) {
                        $('.student-list').trigger('click');
                    }else {
                        $('#add-student-form')[0].reset();
                    }
                })
                return false;
            })

        },
        getData: function(url, data, callBack) {
            $.ajax({
                url: 'http://api.duyiedu.com'+url,
                type: 'GET',
                data: $.extend(data, {appkey: '15797954828_1556959447798'}),
                success: callBack,
                error: function(res) {
                    console.log(res);
                }
            })
        },
        renderTable: function(data) {
            var self = this;
            this.dataList = data.findByPage;
            $('#tbody-data').empty();
            var len = data.findByPage.length;
            if(len > 0) {
                data.findByPage.forEach(function(ele, index) {
                    $('<tr>\
                        <td>'+ele.sNo+'</td>\
                        <td>'+ele.name+'</td>\
                        <td>'+(ele.sex == 0 ? '男' : '女')+'</td>\
                        <td>'+ele.email+'</td>\
                        <td>'+(new Date().getFullYear() - ele.birth)+'</td>\
                        <td>'+ele.phone+'</td>\
                        <td>'+ele.address+'</td>\
                        <td>\
                            <button class="btn edit-btn" data-id='+index+'>编辑</button>\
                            <button class="btn del-btn" data-id='+index+'>删除</button>\
                        </td>\
                    </tr>').appendTo($('#tbody-data'));
                })
                self.pop();
            }
        },
        pop: function() {
            var self = this;
            $('.edit-btn').on('click', function() {
                var index = $(this).data('id');
                self.renderForm(self.dataList[index]);
                $('.dialog').show();
                $('.mask').on('click', function() {
                    $('.dialog').hide();
                })
                $('#edit-student-btn').on('click', function() {
                    var formData = self.getFormData($('#edit-student-form'));
                    self.getData('/api/student/updateStudent', formData, function() {
                        $('.dialog').hide();
                        $('.student-list').trigger('click');
                    })
                    return false;
                })
            });
            $('.del-btn').on('click', function() {
                var isDel = confirm('是否要删除该学生?');
                if(isDel) {
                    var index = $(this).data('id');
                    var sno = self.dataList[index].sNo;
                    self.getData('/api/student/delBySno', {sNo: sno}, function(res) {
                        // $('.student-list').trigger('click');
                        alert('删除成功');
                        $('.student-list').trigger('click');
                    })
                }
            })
        },
        renderForm: function(data) {
            var editForm = $('#edit-student-form')[0];
            for(var prop in data) {
                console.log(prop, data[prop]);
                editForm[prop] ? editForm[prop].value = data[prop] : '';
            }
        },
        getFormData: function(dom) {
            var data = dom.serializeArray();
            var obj = {};
            data.forEach(function(ele, index) {
                obj[ele.name] = ele.value;
            })
            return obj;
        }
    }
    obj.init();
})(window.jQuery)