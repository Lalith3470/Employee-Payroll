document.addEventListener("DOMContentLoaded", function() {
    let lst= [];
    function add() {
        let nameInput = document.getElementById("Name");
        let name = nameInput.value;
        if (name) {
            if(name in lst){
                console.log("Already in list")
                throw new console.error("Already in list");
            }
            else{
                lst.push(name);
                nameInput.value = '';
                displayNames();
            }
        }
    }
    function del() {
        let nameInput = document.getElementById("Name");
        let name = nameInput.value;
        let tmp = lst.indexOf(name);
        if (tmp !== -1) {
            lst.splice(tmp,1);
            nameInput.value = '';
            displayNames();
        } 
    }
    function displayNames() { 
        document.getElementById("show").innerHTML = lst;
    }

    document.getElementById("add").addEventListener("click", add);
    document.getElementById("del").addEventListener("click", del);
});