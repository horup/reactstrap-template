import * as React from 'react';
import {Input} from 'reactstrap';
import {Provider, connect, Dispatch} from 'react-redux';
import {createStore} from 'redux';
import * as Store from './store';
import {TodoList} from './todolist';


let store = createStore(Store.app);

let TodoContainer = connect(
    (state:Store.AppState) =>
    {
        return {todos:state.todos.now};
    },
    (dispatch) =>
    {
        return {make:()=>dispatch(Store.Actions.addTodo("New todo")),
            complete:(id:number)=>dispatch(Store.Actions.completeTodo(id))};
    }
)(TodoList);


export class ReduxView extends React.Component<any, any>
{
    render() {
        return (
            <Provider store={store}>
                <div>
                    <TodoContainer />
                    <button onClick={() => store.dispatch(Store.Actions.undo())}>Undo</button>
                </div>
            </Provider>
        )
    }
}