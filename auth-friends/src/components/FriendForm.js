import React from 'react'

function FriendForm() {
    return (
        <div>
            <h4>Add New Friend</h4>
            <form>
                <div>
                    <label>Name:</label>
                    <input id="name" name='name' type='text' />
                </div><br />
                <div>
                    <label>Email:</label>
                    <input id="email" name='email' type='email' />
                </div><br />
                <div>
                    <label>Age:</label>
                    <input id="age" name='age' type='number' />
                </div><br />
                <button>Add New Friend </button>
            </form>
        </div>
    )
}

export default FriendForm;
