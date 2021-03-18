function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            let listUsers = document.getElementById("user-td");
            let responses = JSON.parse(this.responseText);

            for (var i = 0; i < responses.length; i++) {
                listUsers.insertAdjacentHTML("afterbegin",
                    "<td>" + responses[i].id + "</td>" +
                    "<td>" + "<a href='user.html'>" + responses[i].full_name + "</a>" +"</td>" +
                    "<td>" + responses[i].gender + "</td>" +
                    "<td>" + responses[i].birthday + "</td>" +
                    "<td>" + responses[i].image_url + "</td>")
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