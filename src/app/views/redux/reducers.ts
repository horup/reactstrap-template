import * as Actions from './actions';
import {ActionTypes} from './actions';
import {combineReducers, Action} from 'redux';

export class AppState
{
    name:string = name();
    count:number = count();
}

const name = (state:string = "Default", action:Action = null):string =>
{
    switch (action.type)
    {
        case ActionTypes.SetName:
        {
            return (<Actions.SetName>action).name;
        }
        default:
        return state;
    }
}

const count = (state:number = 0, action:Action = null):number =>
{
    switch (action.type)
    {
        case ActionTypes.SetName:
        {
            return state + 1;
        }
        default:
        return state;
    }
}

export const app = combineReducers({
    count,
    name
}) as (state:AppState, action:Action)=>AppState


