const axios = require('axios').default;

const axiosConfig = {
    baseURL: 'http://localhost:3000',
    crossDomain: true,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
};
// ADD_USER
export const addUser = (user) => ({
	type: 'ADD_USER',
	user
});

export const startAddUser = (userData = {}) => {
	return async (dispatch) => {
		const { name = '' } = userData;
		const user = { name };
		try {
			const response = await axios.post('/users', user, axiosConfig);
			dispatch(addUser({
				_id: response.data.user._id,
				...user
			}));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// REMOVE_USER
export const removeUser = ({ id } = {}) => ({
	type: 'REMOVE_USER',
	id
});

export const startRemoveUser = ({ id } = {}) => {
	return async (dispatch) => {
		try {
			await axios.delete(`/user/${id}`, axiosConfig);
			dispatch(removeUser({ id }));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// EDIT_USER
export const editUser = (id, updates) => ({
	type: 'EDIT_USER',
	id,
	updates
});

export const startEditUser = (id, updates) => {
	return async (dispatch) => {
		try {
			await axios.patch(`/user/${id}`, updates, axiosConfig);
			dispatch(editUser(id, updates));
		}catch(e){
			dispatch(error(e));
		}
	};
};

// SET_USERS
export const setUsers = (users) => ({
	type: 'SET_USERS',
	users
});

export const startSetUsers = () => {
	return async (dispatch) => {
        try {
			const response = await axios.get(`/users/all`, axiosConfig);
            dispatch(setUsers(response.data));
		}catch(e){
			dispatch(error(e));
        }
	};
};

export const error = (error = {}) => ({
    type: 'ERROR',
    error
}); 