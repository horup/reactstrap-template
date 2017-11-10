import * as React from 'react';
import {Input} from 'reactstrap';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';
import * as Store from './store';


let store = createStore(Store.app);

const Hello = ({name, onClick, count}:{name:string, onClick:()=>any, count:number}) =>
{
    return <div onClick={()=>onClick()}>Hello {name} + {count}</div>
}

const HelloContainer = connect((state:Store.AppState)=>{return {name:state.name, count:state.count}}, dispatch=>{return {onClick:()=>dispatch(Store.Actions.setName("Awesome:"))}})(Hello);

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