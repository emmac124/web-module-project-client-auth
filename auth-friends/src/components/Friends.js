import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendForm from './FriendForm';

const Friends = () => {
    const[friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h4>Friends List</h4>
            <ul>
                {
                    friends.map(friend => {
                        return <li>{friend.name}</li>
                    })
                }
            </ul>
            <FriendForm />
        </div>
    )
}

export default Friends;
