import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTodo from './addTodo';
import FiltersTodo from './filtersTodo';
import ListTodo from './listTodo';
import {
	initTodos,
	addTodo,
	completeTodo,
	setVisibilityFilter,
	visibilityFilters,
} from '../../redux/actions/todosActions';

function TodoList() {
	const [currentTask, setcurrentTask] = useState('');
	const user = useSelector(state => state.auth.user);
	const dispatch = useDispatch();
	useEffect(() => {
		if(user) {
			dispatch(initTodos(user));
		}
		
	}, [user]);
	const addNewTask = (value) => {
		if(value.length > 3) {
			if(user) {
				dispatch(addTodo({title:value, user}));
			}else {
				alert('Login please')
			}
			
		}
	};
	const todos = useSelector(state => state.todos);
	const selectedFilter = useSelector(state => state.visibilityFilter);
		
	return (
		<div className="container" style={{ minWidth: 300, maxWidth: 700 }}>
			<div className="row justify-content-center">
				<div className="col-12 col-sm-12 col-md-12">
					<h2 className="display-5 mt-3">{currentTask}</h2>
					<hr />
					<div className="input-group mt-3">
						<AddTodo
							addNewTask={(value) => {
								addNewTask(value);
							}}
						/>
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-sm-12 col-md-12">
					<div className="input-group mt-3">
						<FiltersTodo 
							onChange={(filter) => {
								dispatch(setVisibilityFilter(filter));
							}}
							filters={visibilityFilters}
						/>							
					</div>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 col-sm-12 col-md-12">
					<ListTodo
						todos={todos}
						selectedFilter={selectedFilter}
						filters={visibilityFilters}
						onClick={(id) => {
							dispatch(completeTodo(id));
						}}
						onSelect={(title) => {
							setcurrentTask(title);
						}}
					/>
					</div>
				</div>
		</div>
	);
};
export default TodoList;