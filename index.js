window.sendUser = function(event) {
    event.preventDefault();
    var xhttp = new this.XMLHttpRequest();
    xhttp.open("POST","https://fast-harbor-93488.herokuapp.com/api/v1/users" );
    xhttp.onload = function (event) {
        let notify = document.getElementById("notification");
        notify.style.display = "block";

        if (xhttp.status == 200 || xhttp.status == 201) {
            let response = JSON.parse(this.responseText);
            notify.classList.remove("is-danger");
            notify.classList.add("is-info");
            notify.innerText = "! User Created !"
        }else{
            notify.classList.remove("is-info");
            notify.classList.add("is-danger");
            notify.innerText = xhttp.response
        }

    };
    var userForm = new this.FormData(document.getElementById("user_form"))
    xhttp.send(userForm)

};
