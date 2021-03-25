import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Link, useHistory } from 'react-router-dom';

const Friends = () => {
    const[friends, setFriends] = useState([]);

    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const logout = () => {
        axiosWithAuth()
        .post('http://localhost/api/logout')
        .then(() => {
          localStorage.removeItem('token')
          push('/');
        });
      };

    return (
        <div>
            <h3>Current Friends</h3>
            <Link to='/friends/add-new'>Add Friend</Link>
                {
                    friends.map(friend => (
                        <p key={friend.id}>{friend.name}</p>
                    ))
                }
            <button onSubmit={logout}>Logout</button>
        </div>
    )
}

export default Friends;
