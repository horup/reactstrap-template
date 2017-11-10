import {Action} from 'redux';

export enum Type
{
    AddTodo = "AddTodo",
    CompleteTodo = "CompleteTodo",
    Undo = "Undo"
}

export let addTodo = (todo:string) =>
{
    return {type:Type.AddTodo, todo:todo}
}

export let completeTodo = (id:number) =>
{
    return {type:Type.CompleteTodo, id:id}
}

export let undo = () =>
{
    return {type:Type.Undo}
}

