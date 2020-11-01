import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { startAddTask } from '../actions/tasks';

export const AddTaskPage = (props) => {
	const onSubmit = (task) => {
		props.startAddTask({...task, user_id: props.user._id});
		props.history.push(`/userTasks/${props.user._id}`);
	};

	return (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Add Task</h1>
			</div>
		</div>
		<div className="content-container">
			<TaskForm
				onSubmit={onSubmit}
			/>
		</div>
	</div>
	);
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user._id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddTask: (task) => dispatch(startAddTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTaskPage);