require("bootstrap/dist/css/bootstrap.css");
require('react-datetime/css/react-datetime.css')
require("./style.css");
import * as React from 'react';
import * as Dom from 'react-dom';
import App from './app';

import Globalize from 'globalize';
//import globalizeLocalizer from 'react-widgets-globalize';

//Globalize.locale('en');
//globalizeLocalizer();*/

var div = document.createElement("div");   
document.body.appendChild(div);        
Dom.render(<App/>, div);