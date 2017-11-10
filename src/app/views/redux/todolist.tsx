import * as React from 'react';

export interface Todo 
{
    id:number;
    todo:string;
    completed:boolean;
} 

let Todo = ({id, todo, completed}:Todo, complete:(id:number)=>any) =>
{
    return <div key={id}>{todo} - <span onClick={()=>complete(id)}>{completed == true ? "Done" : "Not Done" }</span></div>
}

let TodoHeader = ({todos}:{todos:Todo[]}) =>
{
    return <div>Current Todos: {todos.filter(todo=>todo.completed == false).length}</div>
}

let TodoMaker = ({make}:{make:()=>any}) =>
{
    return <div><button onClick={()=>make()}>Add</button></div>
}

export let TodoList = ({todos, make, complete}:{todos:Todo[], make:()=>any, complete:(id:number)=>any})=>
{
    return (
        <div>
            <TodoHeader todos={todos}/>
            {todos.map(todo=>Todo(todo, complete))}
            <TodoMaker make={()=>make()}/>
        </div>
    )
}