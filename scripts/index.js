
var data = [];
function details(){
    let name =  document.getElementById('name').value;
    // let profileimg = document.getElementById('image').value;
    let gender = document.getElementById('male').checked;
    var department = document.getElementById('department').checked;
    var department1 = document.getElementById('department1').checked;
    var department2 = document.getElementById('department2').checked;
    var department3 = document.getElementById('department3').checked;
    var department4 = document.getElementById('department4').checked;

    let salary = document.getElementById('sal').value;
    let date = document.getElementById('date').value;
    let note = document.getElementById("note").value;
    const obj = {
        name : name,
        // profileimg : profileimg,
        gender: gender ? "male" : "female",
        department : [],
        salary : salary,
        date : date,
        note : note
    }
    let arr = [];
    if(department){
        arr.push("HR");
    }
    if(department1){
        arr.push("Sales");
    }
    if(department2){
        arr.push("Finance")
    }
    if(department3){
        arr.push("Engineer")
    }
    if(department4){
        arr.push("other")
    }
    obj.department=arr;
    data.push(obj)
}
document.getElementById("submitButton").addEventListener("click", function() {
    details();
});
console.log(data)

