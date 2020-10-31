import React, { useState }  from 'react';

let yup = require('yup');

let schema = yup.object().shape({
	name: yup.string().required()
});


export const UserForm = (props) => {
    const initName = props.user ? props.user.name : ''
    const [name, setName] = useState(initName);
    const [errors, setErrors] = useState({
		error: false,
		message: ''
	});

	const onSubmit = (e) => {
        e.preventDefault();
		schema.validate({name})
			.then(() => { 
                props.onSubmit({ name });
            })
			.catch((err) => { setErrors({error: true, message: err.errors}); });
	};

	return (
        <form className="form" onSubmit={onSubmit}>
            {errors.error && <p className="form__error">{errors.message}</p>}
            <input
                type="text"
                placeholder="Name"
                autoFocus
                className="text-input"
                value={name}
                onChange={(e) => 
                    setName(e.target.value)
                }
            />
            <div>
                <button type="submit" className="button">Save User</button>
            </div>
        </form>
	)
}

export default UserForm