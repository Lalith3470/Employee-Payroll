function addDetails(){
    $.ajax({
        url: "http://localhost:3000/data",
        method: "GET",
        contentType: "application/json",
        success: function() {
            console.log("Success:");
        },
        error: function(error) {
            console.error("Error fetching data:", error);
        }
    });
}
document.getElementById("submitButton1").addEventListener("click", function() {
    addDetails();
});