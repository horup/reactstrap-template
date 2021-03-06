import * as React from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { HashRouter, Route, Link } from 'react-router-dom';
import { HomeView, FormsView, ChartsView, ReduxView } from './views';
import Header from './header';

export default class App extends React.Component<any, any>
{
    render() {
        return (
            <div>
                <Header />
                <Route exact path="/" component={HomeView} />
                <Route path="/forms" component={FormsView} />
                <Route path="/charts" component={ChartsView} />
                <Route path="/redux" component={ReduxView} />
            </div>
        )
    }
}