import * as React from 'react';
import {Input} from 'reactstrap';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import {AppState, app} from './reducers';
import HelloName from './helloname';
import * as Actions from './actions';

let store = createStore(app);

const Hello = ({name, onClick, count}:{name:string, onClick:()=>any, count:number}) =>
{
    return <div onClick={()=>onClick()}>Hello {name} + {count}</div>
}

const HelloContainer = connect((state:AppState)=>{return {name:state.name, count:state.count}}, dispatch=>{return {onClick:()=>dispatch(Actions.setName("Awesome:"))}})(Hello);

export class ReduxView extends React.Component<any, any>
{
    render()
    {
        return (
            <div>
                <Provider store={store}>
                    <HelloContainer/>
                </Provider>
            </div>
        )
    }
}