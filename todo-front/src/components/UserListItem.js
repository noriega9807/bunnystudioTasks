import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ _id, name }) => (
    <div className="list-item">  
		<Link className="list-item-route" to={`/userTasks/${_id}`}>
			<div>
			<h3 className="list-item__title">{name}</h3>
			</div>
		</Link>
		<Link className="button button--secondary" to={`/editUser/${_id}`}>Edit</Link>
	</div>
);

export default UserListItem;
