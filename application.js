function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            let listUsers = document.getElementById("list-users");
            let responses = JSON.parse(this.responseText)
            console.log(responses)
        }
    };
    xhttp.open("GET","http://localhost:3001/api/v1/users", true);
    xhttp.send();
}
getUsers();