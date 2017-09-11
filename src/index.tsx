require("bootstrap/dist/css/bootstrap.css");
//require("popper.js");
require("./style.css");
import * as React from 'react';
import * as Dom from 'react-dom';
import App from './app';

var div = document.createElement("div");   
document.body.appendChild(div);        
Dom.render(<App/>, div);