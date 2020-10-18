import React from 'react';


const ListTodo = (props) => {
    const getFilteredTodos = (todos, selectedFilter) => {
        switch(selectedFilter) {
            case props.filters.SHOW_COMPLETE:
                return todos.filter(todo => todo.completed);
            case props.filters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    };
    const filteredsTodos = getFilteredTodos(props.todos, props.selectedFilter);
    return(
        <>
            {filteredsTodos.length > 0 &&
                <ul className="list-group mt-3">
                    {filteredsTodos.map((todo, index) => 
                        <li 
                            className="list-group-item d-flex justify-content-between align-items-center" 
                            key={index}
                        >
                            {todo.title}
                            {!todo.completed &&
                                <button 
                                    className="btn btn-outline-primary" 
                                    onClick={() => {
                                        props.onClick(todo.id);
                                    }}>
                                        Done
                                </button>
                            }
                        </li>
                    )}
                </ul>
            }
        </>
    );
};

export default ListTodo;