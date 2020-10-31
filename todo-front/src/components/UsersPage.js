import React from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';
import { connect } from 'react-redux';

const UsersPage = (props) => (
	<div>
		
		<div className="page-header">
			<div className="content-container">
				<div>
					<Link className="button" to="/createUser">Add User</Link>
				</div>
			</div>
		</div>
		<DataList headerName="Users" dataSet={props.users} />
	</div>
);

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(UsersPage);
