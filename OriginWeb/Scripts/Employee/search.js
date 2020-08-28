$(function () {
});



// 員工列表
function GetEmployeeList() {
    $.ajax({
        type: 'GET',
        url: 'https://localhost:5001/api/employees',
        contentType: "application/json",
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

// 顯示編輯
function ShowAdd() {
    $.get('/employee/addresult', '', function (response) {
        $('#divPopup').html(response);
    });
}

// 顯示編輯
function ShowEdit(id) {
    $.ajax({
        type: 'GET',
        url: 'https://localhost:5001/api/employees' + '/' + id,
        contentType: "application/json",
        success: function (result, textStatus, jqXHR) {
            $.post('/employee/editresult', { employee: result }, function (response) {
                $('#divPopup').html(response);
            });
            
        },
        error: function (request, status, error) {
        }
    });
}