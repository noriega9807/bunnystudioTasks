import React from 'react';
import { Link } from 'react-router-dom';

const TaskListItem = ({ _id, description, state }) => (
    <div className="list-item">  
		<div className="list-item-route">
			<div>
			    <h3 className="list-item__title">{description}</h3>
                <span className="list-item__sub-title">{state}</span>
			</div>
		</div>
		<Link className="button button--secondary" to={`/editTask/${_id}`}>Edit</Link>
	</div>
);

export default TaskListItem;
