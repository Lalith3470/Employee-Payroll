function f1(){
    let name = $("#name").val();
    let img1 = $("#img1").is(':checked');
    let img2 = $("#img2").is(':checked');
    let img3 = $("#img3").is(':checked');
    let img4 = $("#img4").is(':checked');
    let gender = $("#male").is(':checked');
    let department = $("#department1").is(':checked');
    let department1 = $("#department2").is(':checked');
    let department2 = $("#department3").is(':checked');
    let department3 = $("#department4").is(':checked');
    let department4 = $("#department5").is(':checked');
    let salary = $("#sal").val();   
    let start_date = $("#date").val();
    let action1 = $("action1").attr('class');
    let notes = $("#notes").val();
    let img="";
    if(img1) img = "https://thumbs.dreamstime.com/b/beautiful-brunette-girl-red-lips-black-bob-hairstyle-pretty-young-woman-black-hair-closeup-portrait-model-209406206.jpg"
    if(img2) img = "https://media.istockphoto.com/id/1216291363/photo/albino-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=AX1z11YXqITEqMUCCaQn9vkffmP36xOOjfnUJxYgwu8="
    if(img3) img="data:image/jpeg;base64,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";
    if(img4) img="https://media.istockphoto.com/id/1138008134/photo/indian-man-headshot.jpg?s=612x612&w=0&k=20&c=ttUUhnXwTVhGqEi6QU4zSkp1KP44lCK4WIwoSo-LXpY="
    const data = {
        Name: name,
        img:img,
        Gender: gender ? "Male" : "Female",
        Department: [],
        Salary: salary,
        Start_Date: start_date,
        deleteIcon: action1,
        Notes: notes
    }
    let dept_values = []
    if (department) dept_values.push("HR")
    if (department1) dept_values.push("Sales")
    if (department2) dept_values.push("Finance")
    if (department3) dept_values.push("Engineer")
    if (department4) dept_values.push("Others")
    data.Department = dept_values;

    //POST Method
    if(data.Name){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/data', 
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(response) {
            console.log('Success: ', response);
        },
        error: function(xhr, status, error) {
            console.error('Error: ', error);
        }
    });
}
}

$('#submitButton').click(function (event) {
    event.preventDefault();
    f1(); 
});


// Event listener for delete icon
$('#table').on('click', '.deleteButton', function(){
    var employeeId = $(this).data('id');
    var $row = $(this).closest('tr'); // Store reference to the row

    $.ajax({
        url: 'http://localhost:3000/data/' + employeeId,
        type: 'DELETE',
        success: function(response) {
            console.log('Item deleted successfully:', response);
            
            $row.remove();
        },
        error: function(xhr, status, error) {
            console.error('Error deleting item:', xhr.responseText);
        }
    });
});
$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/data',
        type: 'GET',
        success: function(data) {
            console.log(data);
            data.forEach(function (employee) {
                var newRow = `<tr>
                    <td>
                        <div class='boxsize justify-content-start names1'>
                            <img src='${employee.img}' class='image-box'alt='img'>${employee.Name} 
                        </div>
                    </td>
                    <td>${employee.Gender}</td>
                    <td>${employee.Department}</td>
                    <td>${employee.Salary}</td>
                    <td>${employee.Start_Date}</td>
                    <td>
                        <div>
                        <button class="deleteButton" data-id="${employee.id}">Delete</button>
                        <button class="editButton" data-id="${employee.id}">Edit</button>

                    </div>
                    </td>
                </tr>`;
                $("#tableBody").append(newRow);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
});

$(document).on('click', '.editButton', function (event) {
    event.preventDefault();
    var employeeId = $(this).data('id');

    // Make AJAX request to get employee data
    $.ajax({
        type: 'GET',
        url: `http://localhost:3000/data/${employeeId}`,
        success: function (employee) {
            // Redirect to the edit page with employee data as URL parameters
            window.location.href = `http://127.0.0.1:5500/pages/index.html?employeeId=${employee.id}&name=${employee.Name}&gender=${employee.Gender}&department=${employee.Department}&salary=${employee.Salary}&startDate=${employee.Start_Date}`;

        },
        error: function (error) {
            console.error('Error fetching employee data:', error);
        }
    });
});

// Function to get URL parameters
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

$(document).ready(function () {
    const employeeId = getUrlParameter('employeeId');
    const name = getUrlParameter('name');
    const gender = getUrlParameter('gender');
    const department = getUrlParameter('department');
    const salary = getUrlParameter('salary');
    const startDate = getUrlParameter('date');

    // Populate input fields with URL parameters
    $('#employeeId').val(employeeId);
    $('#name').val(name);
    $('#male').prop('checked', gender ? "Male" : "Female");
    // Populate department checkboxes based on the 'department' value
    $('#department').prop('checked', department.includes('HR'));
    $('#department1').prop('checked', department.includes('Sales'));
    $('#department2').prop('checked', department.includes('Finance'));
    $('#department3').prop('checked', department.includes('Engineer'));
    $('#department4').prop('checked', department.includes('Others'));
    $('#sal').val(salary);
    $('#date').val(startDate);

    // Event listener for update button
    $('#editButton').click(function (event) {
        event.preventDefault();
        // Call the update function with the extracted data
        updateEmployeeData(employeeId, name, $('#gender').is(':checked'), getSelectedDepartments(), salary, startDate);
    });
});

// Function to get the selected department checkboxes
function getSelectedDepartments() {
    let selectedDepartments = [];
    $('input[name="department"]:checked').each(function () {
        selectedDepartments.push($(this).val());
    });
    return selectedDepartments;
}

// Function to update employee data
function updateEmployeeData(employeeId, name, gender, department, salary, startDate) {
    const data = {
        Name: name,
        Gender: gender ? "Male" : "Female",
        Department: department,
        Salary: salary,
        Start_Date: startDate,
    };

    $.ajax({
        method: 'PUT',
        url: `http://localhost:3000/data/${employeeId}`,
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function (response) {
            // Handle success response
            console.log('Employee data updated successfully');
        },
        error: function (error) {
            // Handle error response
            console.error('Error updating employee data:', error);
        }
    });
}
