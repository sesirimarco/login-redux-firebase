import React, { useEffect } from 'react';
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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(initTodos());
	}, []);
	const addNewTask = (value) => {
		if(value.length > 3) {
			dispatch(addTodo(value));
		}
	};
	const todos = useSelector(state => state.todos);
	const selectedFilter = useSelector(state => state.visibilityFilter);
		
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-9 col-sm-9 col-md-6">
					<h2 className="display-5 mt-3">Notes with Redux</h2>
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
				<div className="col-9 col-sm-9 col-md-6">
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
				<div className="col-9 col-sm-9 col-md-6">
					<ListTodo
						todos={todos}
						selectedFilter={selectedFilter}
						filters={visibilityFilters}
						onClick={(id) => {
							dispatch(completeTodo(id));
						}}
					/>
					</div>
				</div>
		</div>
	);
};
export default TodoList;