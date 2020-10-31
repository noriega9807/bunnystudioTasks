import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import DataList from './DataList';
import { connect } from 'react-redux';
import { startSetTasks } from '../actions/tasks';

export const TaskPage = (props) => {
    useEffect(() => {
        props.startSetTasks(props.user._id);
    }, []);

    return (
	<div>
		<div className="page-header">
			<div className="content-container">
				<div>
					<Link className="button" to={`/createTask/${props.user._id}`}>Add Task</Link>
				</div>
			</div>
		</div>
		<DataList headerName="Tasks" dataSet={props.tasks} />
	</div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find((user) => user._id === props.match.params.id),
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => ({
    startSetTasks: (id) => dispatch(startSetTasks(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
