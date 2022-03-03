import React from "react";

const Task = () => {
    return(
        <div className="task">
            <h2 className="task-header">Tasks List</h2>
            <form className="task-container">
                <p>T A S K</p>
                <p><input type="submit" value="Get Tasks" onClick={get()} /></p>
            </form>
        </div>
    )
}

function get(){
    const Http = new XMLHttpRequest();
    const url='http://localhost:8080/v1/task';

    Http.open("GET", url );
    Http.onload = function() {
        if (Http.status != 200) { // analyze HTTP status of the response
          alert(`Error ${Http.status}: ${Http.statusText}`); // e.g. 404: Not Found
        } 
      };

    Http.onreadystatechange = (e) => {
        console.log(Http.getAllResponseHeaders)
    }
}

export default Task
