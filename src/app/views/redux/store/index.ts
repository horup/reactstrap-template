import * as Actions from './actions';
import {combineReducers, Action} from 'redux';
import {Todo} from '../todolist';

interface TodoHistory
{
    now:Todo[],
    past:Todo[][]
}

export class AppState
{
    todos:TodoHistory;
}

const todos = (todos:TodoHistory = {now:[], past:[]}, action:Action = null):TodoHistory =>
{
    switch (action.type)
    {
        case Actions.Type.AddTodo:
        {
            let newTodo:Todo = {id:todos.now.length + 1, todo:(action as any).todo, completed:false};
            let now = [...todos.now];
            let past = [...todos.past];
            now.push(newTodo);
            past.push(now);
            
            return {now:now, past:past};
        }
        case Actions.Type.CompleteTodo:
        {
            let id = (action as any).id;
            let now = todos.now.map(todo => todo.id != id ? todo : {...todo, ...{completed:!todo.completed}});
            let past = [...todos.past];
            past.push(now);

            return {now:now, past:past};
        }
        case Actions.Type.Undo:
        {
            if (todos.past.length > 1)
            {
                let past = [...todos.past];
                past.pop();

                return {now:past[past.length-1], past:past};
            }
            return {now:[], past:[]};
        }
        default:
        return todos;
    }
}

export const app = combineReducers({
    todos
}) as (state:AppState, action:Action)=>AppState

export {Actions};


