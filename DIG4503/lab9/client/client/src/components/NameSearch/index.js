import React from "react";

class NameSearch extends React.Component {
    readName(event) {
        event.preventDefault();

        let element = document.querySelector("#name");

        fetch("api/employees/age/" + element.value)
        .then((res) => {
            return res.json();
        })
        .then((processed) => {
            let reporting = document.querySelector("reportingArea");

            if(processed.error) {
               reportinginnerHTML = processed.error;
            } else {
                reporting.innerHTML = processed.name;
            } 
        });
        element.value = "";
    }
    render(){
        return (
        <div> 
            <h2>Name</h2>
        <form onSubmit={this.readName}>
           <input id="name" type="text"/>
           <button>Submit</button> 
        </form>
        </div>
        )
    }
    }

    export default NameSearch;
