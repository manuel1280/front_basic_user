function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            let listUsers = document.getElementById("list-users");
            let responses = JSON.parse(this.responseText);

            for (var i = 0; i < responses.length; i++) {
                listUsers.insertAdjacentHTML("afterbegin",
                    responses[i].id + " - " + responses[i].full_name + "<br />")
            }

        }
    };
    xhttp.open("GET","http://localhost:3001/api/v1/users", true);
    xhttp.send();
}

window.sendUser = function(event) {
    event.preventDefault();
    var xhttp = new this.XMLHttpRequest();
    xhttp.open("POST","http://localhost:3001/api/v1/users", true);
    xhttp.onload = function (event) {
        let listUsers = document.getElementById("list-users");
        let response = JSON.parse(this.responseText);

        listUsers.insertAdjacentHTML("afterbegin",
            response.id + " - " + response.full_name + "<br />")
    };
    var userForm = new this.FormData(document.getElementById("user_form"))
    xhttp.send(userForm)
};
getUsers();