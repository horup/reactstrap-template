import * as React from 'react';
import {Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {DatetimePicker} from '../extensions';
import {HashRouter, Route} from 'react-router-dom';
import Home from './home';
import Forms from './forms';
import About from './about';

const history = {};
export default class App extends React.Component<any, any>
{
    render()
    {
        return (
            <HashRouter>
                <Container fluid={true}>
                        <Route exact path="/" component={Home}/>
                        <Route path="/forms" component={Forms}/>
                        <Route path="/about" component={About}/>
                </Container>
            </HashRouter>
        )
    }
}