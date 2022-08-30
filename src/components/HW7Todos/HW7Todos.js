import './HW7Todos.scss'
import React from 'react';
import Hw7Header from "./Hw7Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {useSelector} from "react-redux";


const Hw7Todos = () => {

    const [todo, setTodo] = useSelector([
        {
            id: 1,
            title: '1',
            status: true,
        },
        {
            id: 2,
            title: '2',
            status: true,
        },
        {
            id: 3,
            title: '3',
            status: false,
        },
    ])

    return (
        <>
          <Hw7Header />
            <AddTodo />
            <TodoList todo={todo} setTodo={setTodo} />
        </>
    );
};

export default Hw7Todos;