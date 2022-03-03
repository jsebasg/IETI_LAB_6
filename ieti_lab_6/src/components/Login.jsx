import React from "react";
var cont = 0; 
const Login = () => {
    return(
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <form className="login-container">
                <p><input id="email" type="email" placeholder="Email" /></p>
                <p><input id="password" type="password" placeholder="Password" /></p>
                <button type="button" value="Log in" onClick= {post}  />     
            </form>
        </div>
    )
}

function post(){
    
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/v1/auth';
    const data = {
        email: document.getElementById("email"),
        password : document.getElementById("password")
    }

    Http.open("POST", url );
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(data);

    Http.onreadystatechange = (e) => {
    console.log(Http.getAllResponseHeaders)
    }
    window.location.replace("http://localhost:3000/task")

}

export default Login