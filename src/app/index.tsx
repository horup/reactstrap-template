import * as React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { DatetimePicker } from '../extensions';
import { HashRouter, Route, Link } from 'react-router-dom';
import Home from './home';
import Forms from './forms';
import About from './about';
import Header from './header';

const history = {};
export default class App extends React.Component<any, any>
{
    render() {
        return (
            <div>
                <HashRouter>
                    <Container fluid={true}>
                        <Header/>
                        <Route exact path="/" component={Home} />
                        <Route path="/forms" component={Forms} />
                        <Route path="/about" component={About} />
                    </Container>
                </HashRouter>
            </div>
        )
    }
}