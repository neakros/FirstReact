import React from 'react';

const TodoList = ({todo, setTodo}) => {
    return (
        <div>
            {
                todo.map(item=> (
                    <div>{item.title}</div>
                ))
            }
        </div>
    );
};

export default TodoList;