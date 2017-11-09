import * as React from 'react';
import {AppState, app} from './reducers';
import {connect} from 'react-redux';

const HelloName = (props:{name:string})=>
{
    return <div>Hello {props.name}</div>;
}

const mapStateToProps = (state:AppState) =>
{
    return {name:state.name};
}

const mapDispatchToProps = dispatch =>
{
    return { }
}

let test = connect(mapStateToProps, mapDispatchToProps)(HelloName);

export default test;

