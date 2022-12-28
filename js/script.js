function login(){

    let username,password;
    username = document.getElementById("user").value;
    password = document.getElementById("pass").value;

    if(username == "admin" && password == "admin1" || password == "admin123"){
        window.open('../asset/sal.html','_self');
    }
    else if(username == ""){
        alert("please enter username");
    }
    else if(password == ""){
        alert("please enter password");
    }
    else{
        alert("Incorrect Username or Password");
        }
}