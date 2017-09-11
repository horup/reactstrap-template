require("./style.css");
require("bootstrap/dist/css/bootstrap.css")
require("bootstrap");
import * as React from 'react';
import * as Dom from 'react-dom';
import Test from './test';

var div = document.createElement("div");   
document.body.appendChild(div);        
Dom.render(<Test/>, div);