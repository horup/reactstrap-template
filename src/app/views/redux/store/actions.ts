import {Action} from 'redux';

export enum Type
{
    SetName = "SetName"
}

export let setName = (name:string) =>
{
    return {type:Type.SetName, name:name}
}

