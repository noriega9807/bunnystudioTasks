const axios = require('axios').default;

const axiosConfig = {
    baseURL: 'http://localhost:3000',
    crossDomain: true,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
};
// ADD_TASK
export const addTask = (task) => ({
	type: 'ADD_TASK',
	task
});

export const startAddTask = (taskData = {}) => {
	return async (dispatch) => {
		const {
		description = '',
		state = '',
		user_id = 0
		} = taskData;
		const task = { description, state, user_id };
		console.log(task);
		try {
			const response = await axios.post('/tasks', task, axiosConfig);
			console.log(response.data);
			dispatch(addTask({
				_id: response.data._id,
				...task
			}));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// REMOVE_TASK
export const removeTask = ({ id } = {}) => ({
	type: 'REMOVE_TASK',
	id
});

export const startRemoveTask = ({ id } = {}) => {
	return async (dispatch) => {
		try {
			console.log(id);
			await axios.delete(`/tasks/${id}`, axiosConfig);
			dispatch(removeTask({ id }));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// REMOVE_ALL_USER_TASK
export const removeAllUserTask = ({id} = 0) => ({
	type: 'REMOVE_ALL_USER_TASK',
	user_id: id
});

export const startRemoveAllUserTask = ({id} = {}) => {
	return async (dispatch) => {
		try {
			await axios.delete(`/tasks/remove/allUser/${id}`, axiosConfig);
			dispatch(removeAllUserTask(user_id));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// EDIT_TASK
export const editTask = (id, updates) => ({
	type: 'EDIT_TASK',
	id,
	updates
});

export const startEditTask = (id, updates) => {
	return async (dispatch) => {
		try {
			await axios.patch(`/tasks/${id}`, updates, axiosConfig);
			dispatch(editTask(id, updates));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// SET_TASKS
export const setTasks = (tasks) => ({
	type: 'SET_TASKS',
	tasks
});

export const startSetTasks = (id) => {
	return async (dispatch) => {
        try {
			const response = await axios.get(`/tasks/user/${id}`, axiosConfig);
            dispatch(setTasks(response.data));
		}catch(e){
			dispatch(error(e));
        }
	};
};

export const error = (error = {}) => ({
    type: 'ERROR',
    error
}); 