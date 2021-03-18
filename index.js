window.sendUser = function(event) {
    event.preventDefault();
    var xhttp = new this.XMLHttpRequest();
    xhttp.open("POST","http://localhost:3001/api/v1/users", );
    xhttp.onload = function (event) {
        let listUsers = document.getElementById("list-users");
        let response = JSON.parse(this.responseText);

        listUsers.insertAdjacentHTML("afterbegin",
            response.id + " - " + response.full_name + "<br />")
    };
    var userForm = new this.FormData(document.getElementById("user_form"))
    xhttp.send(userForm)
    alert("!user created!");
};