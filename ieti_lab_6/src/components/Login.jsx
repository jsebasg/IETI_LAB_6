import React from "react";

const Login = () => {
    return(
        <div className="login">
            <h2 className="login-header">Log in</h2>
            <form className="login-container">
                <p><input id="email" type="email" placeholder="Email" /></p>
                <p><input id="password" type="password" placeholder="Password" /></p>
                <p><input type="submit" value="Log in" onClick={post()} /></p>
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

    console.log(data.email); 
    console.log(data.password); 
    
    Http.open("POST", url );
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));

    Http.onreadystatechange = (e) => {
    console.log(Http.getAllResponseHeaders)
    }
}

export default Login