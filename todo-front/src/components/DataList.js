import React from 'react';
import UserListItem from './UserListItem';
import TaskListItem from './TaskListItem';

export const UsersList = (props) => (
    <div className="content-container content-container__margin">
        <div className="list-header">
            <div>{props.headerName}</div>
            <div>Action</div>
        </div>
        <div className="list-body">
            {
                props.dataSet.length === 0 ? (
                <div className="list-item list-item--message">
                    <span>No data</span>
                </div>
                ) : (
                    props.dataSet.map((data) => {
                        if (props.headerName === "Users") {
                            return <UserListItem key={data._id} {...data} /> 
                        }else{
                            return <TaskListItem key={data._id} {...data} /> 
                        }

                    })
                )
            }
        </div>
    </div>
);

export default UsersList;
