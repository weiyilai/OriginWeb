$(function () {
});


var validate;
// 員工列表
function GetEmployeeList() {
    $.ajax({
        type: 'GET',
        url: 'https://localhost:5001/api/employees',
        success: function (result, textStatus, jqXHR) {
            // Photo長度過長所以使用post
            $.post('/employee/searchresult', { employees: result }, function (response) {
                $('#divResult').html(response);
            });
        },
        error: function (request, status, error) {
        }
    });
}

// 顯示新增
function ShowAdd() {
    $.get('/employee/addresult', '', function (response) {
        $('#divPopup').html(response);
        SetFormValidate();
    });
}

// 顯示編輯
function ShowEdit(id) {
    $.ajax({
        type: 'GET',
        url: 'https://localhost:5001/api/employees' + '/' + id,
        success: function (result, textStatus, jqXHR) {
            $.post('/employee/editresult', { employee: result }, function (response) {
                $('#divPopup').html(response);
                SetFormValidate();
            });
            
        },
        error: function (request, status, error) {
        }
    });
}

// 新增員工資料
function Add() {
    var valid = IsValid();
    if (valid) {
        var formdata = $('#form-Employee').serializeArray();
        var item = {};
        $(formdata).each(function (index, obj) {
            item[obj.name] = obj.value;
        });
        $.ajax({
            type: 'POST',
            url: 'https://localhost:5001/api/employees',
            contentType: 'application/json',
            data: JSON.stringify(item),
            success: function (result, textStatus, jqXHR) {
                GetEmployeeList();
            },
            error: function (request, status, error) {
            }
        });
    }
}

// 編輯員工資料
function Edit() {
    var valid = IsValid();
    if (valid) {
        var formdata = $('#form-Employee').serializeArray();
        var item = {};
        $(formdata).each(function (index, obj) {
            item[obj.name] = obj.value;
        });
        $.ajax({
            type: 'PUT',
            url: 'https://localhost:5001/api/employees' + '/' + $('#EmployeeID').val(),
            contentType: 'application/json',
            data: JSON.stringify(item),
            success: function (result, textStatus, jqXHR) {
                GetEmployeeList();
            },
            error: function (request, status, error) {
            }
        });
    }
}

var employeeId;
// 設置員編
function Delete(id) {
    $.ajax({
        type: 'Delete',
        url: 'https://localhost:5001/api/employees' + '/' + id,
        success: function (result, textStatus, jqXHR) {
            GetEmployeeList();
        },
        error: function (request, status, error) {
        }
    });
}

// 設定表單驗證
function SetFormValidate() {
    validate = $("#form-Employee").validate({
        rules: {
            LastName: {
                required: true
            },
            FirstName: {
                required: true
            }
        }
    });
}

// 是否通過驗證
function IsValid() {
    var valid = $('#form-Employee').valid();
    if (!valid) {
        console.log('input validate is ' + valid);
        // 驗證沒通過時，會將焦點設定在第1個驗證沒過的元素上
        validate.focusInvalid();
    }

    return valid;
}