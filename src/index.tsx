require("bootstrap/dist/css/bootstrap.css");
require('react-datetime/css/react-datetime.css')
require("./style.css");
import * as React from 'react';
import * as Dom from 'react-dom';
import App from './app';


var div = document.createElement("div");   
document.body.appendChild(div);        
Dom.render(<App/>, div);