import React, { useState } from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}

const FriendForm = () => {

    const [formValues, setFormValues] = useState(initialFormValues);
    const { push } = useHistory();

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', formValues)
            .then(res => {
                console.log(res);
                push('/friends');
            })
            .catch(err => {
                console.log({ err });
            })
    }

    return (
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input id="name" name='name' value={formValues.name} onChange={handleChanges} />
                </div><br />
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id="email" name='email' value={formValues.email} onChange={handleChanges} />
                </div><br />
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input id="age" name='age' value={formValues.age} onChange={handleChanges} />
                </div><br />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm;
