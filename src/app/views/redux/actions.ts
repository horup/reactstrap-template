import {Action} from 'redux';

export enum ActionTypes
{
    SetName
}

export let setName = (name:string) =>
{
    return {type:ActionTypes.SetName, name:name}
}

