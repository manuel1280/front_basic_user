function get_user_id() {
    var url = new URL(window.location.href);
    var c = url.searchParams.get("id");
    return c
}

function getUser() {
    var user_id = get_user_id();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 ) {
            let cardFullName = document.getElementById("full_name");
            let cardBigImageUrl = document.getElementById("big_image_url");
            let cardImageUrl = document.getElementById("image_url");
            let cardGender = document.getElementById("gender");
            let cardBirthday = document.getElementById("birthday");
            let nickName = document.getElementById("nick_name");

            let response = JSON.parse(this.responseText);

            cardFullName.insertAdjacentHTML("afterbegin", response.full_name);
            cardBigImageUrl.insertAdjacentHTML("afterbegin", "<img src=" + response.image_url + ">");
            cardImageUrl.insertAdjacentHTML("afterbegin", "<img src=" + response.image_url + ">");
            cardGender.insertAdjacentHTML("afterbegin", response.gender);
            cardBirthday.insertAdjacentHTML("afterbegin", "<strong>" + "Birthday is " + response.birthday) + ">";
            nickName.insertAdjacentHTML("afterbegin", "@" + response.full_name);

        }
    };
    console.log(user_id)
    xhttp.open("GET","http://localhost:3001/api/v1/users/" + user_id, true);
    xhttp.send();
}
getUser();