import React from 'react';

import ReactDOM from 'react-dom';

const customer = {

  first_name: "Alyssa",

  last_name: "Barella"

};


const output = <div>
  <h1>Hello, my first name is {customer.first_name}</h1>
  <h2>My last name is {customer.last_name}</h2>
  </div>

ReactDOM.render(output, document.querySelector("#root"));