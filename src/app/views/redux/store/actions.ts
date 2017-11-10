import {Action} from 'redux';

export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UNDO = "UNDO";

export let addTodo = (todo:string) =>
{
    return {type:ADD_TODO, todo:todo}
}

export let completeTodo = (id:number) =>
{
    return {type:COMPLETE_TODO, id:id}
}

export let undo = () =>
{
    return {type:UNDO}
}

