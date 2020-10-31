import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';
import { startEditUser, startRemoveUser } from '../actions/users';
import { startRemoveAllUserTask } from '../actions/tasks';

export const EditUserPage = (props) => {
	const onSubmit = (user) => {
		props.startEditUser(props.user._id, user);
		props.history.push('/');
	};

	const onRemove = () => {
		props.startRemoveUser({ id: props.user._id });
		props.startRemoveAllUserTask({ id: props.user._id });
		props.history.push('/');
	};

	return (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Edit User</h1>
			</div>
		</div>
		<div className="content-container">
			<UserForm
				user={props.user}
				onSubmit={onSubmit}
			/>
			<button className="button button--danger" onClick={onRemove}>Remove User</button>
		</div>
	</div>
	);
}

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user._id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditUser: (id, user) => dispatch(startEditUser(id, user)),
  startRemoveUser: (data) => dispatch(startRemoveUser(data)),
  startRemoveAllUserTask: (id) => dispatch(startRemoveAllUserTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);
