﻿$(function () {
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
            console.log(result.join());
        },
        error: function (request, status, error) {
        }
    });
}