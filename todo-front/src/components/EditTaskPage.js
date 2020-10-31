import React from 'react';
import { connect } from 'react-redux';
import TaskForm from './TaskForm';
import { startEditTask, startRemoveTask } from '../actions/tasks';

export const EditTaskPage = (props) => {
	const onSubmit = (task) => {
		props.startEditTask(props.task._id, task).then(() => {
			props.history.push(`/userTasks/${props.task.user_id}`);
		});
        
	};

	const onRemove = () => {
		props.startRemoveTask({ id: props.task._id }).then(() => {
			props.history.push(`/userTasks/${props.task.user_id}`);
		});
	};

	return (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Edit Task</h1>
			</div>
		</div>
		<div className="content-container">
			<TaskForm
				task={props.task}
				onSubmit={onSubmit}
			/>
			<button className="button button--danger" onClick={onRemove}>Remove Task</button>
		</div>
	</div>
	);
}

const mapStateToProps = (state, props) => ({
  task: state.tasks.find((task) => task._id === props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  startEditTask: (id, user) => dispatch(startEditTask(id, user)),
  startRemoveTask: (data) => dispatch(startRemoveTask(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage);
