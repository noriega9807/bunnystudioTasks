import React, { useState }  from 'react';

let yup = require('yup');

let schema = yup.object().shape({
    description: yup.string().required(),
    state: yup.string().required()
});


export const TaskForm = (props) => {
    const initDescription = props.task ? props.task.description : '';
    const initTaskStatus = props.task ? props.task.state : 'to do';
    const [description, setDescription] = useState(initDescription);
    const [taskStatus, setTaskStatus] = useState(initTaskStatus);
    const [errors, setErrors] = useState({
		error: false,
		message: ''
	});

	const onSubmit = (e) => {
        e.preventDefault();
		schema.validate({description, state: taskStatus})
			.then(() => { 
                props.onSubmit({ description, state: taskStatus });
            })
			.catch((err) => { setErrors({error: true, message: err.errors}); });
	};

	return (
        <form className="form" onSubmit={onSubmit}>
            {errors.error && <p className="form__error">{errors.message}</p>}
            <input
                type="text"
                placeholder="Description"
                autoFocus
                className="text-input"
                value={description}
                onChange={(e) => 
                    setDescription(e.target.value)
                }
            />
            <div>
                <input 
                    type="radio" 
                    value="to do" 
                    name="status" 
                    checked={taskStatus === "to do"}
                    onChange={(e) => 
                        setTaskStatus(e.target.value)
                    }
                /> To do
                <input 
                    type="radio" 
                    value="done" 
                    name="status" 
                    checked={taskStatus === "done"}
                    onChange={(e) => 
                        setTaskStatus(e.target.value)
                    }
                /> Done
            </div>

            <div>
                <button type="submit" className="button">Save Task</button>
            </div>
        </form>
	)
}

export default TaskForm