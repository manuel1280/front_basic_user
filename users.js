function getUsers() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            let listUsers = document.getElementById("user-td");
            let responses = JSON.parse(this.responseText);

            for (var i = 0; i < responses.length; i++) {
                let user_path = "href=user.html?id=" + responses[i].id;

                listUsers.insertAdjacentHTML("afterbegin",
                    "<td>" + responses[i].id + "</td>" +
                    "<td>" + "<a "+ user_path + ">" + responses[i].full_name + "</a>" +"</td>" +
                    "<td>" + responses[i].gender + "</td>" +
                    "<td>" + responses[i].birthday + "</td>" +
                    "<td>" + responses[i].image_url + "</td>")
            }

        }
    };
    xhttp.open("GET","http://localhost:3001/api/v1/users", true);
    xhttp.send();
}
getUsers();