
import React from 'react';
import axios from 'axios';

import requireAuth from '../auth/requireAuth';

class Users extends React.Component {
    state = {
        users: []
    };
    render() {
        return (
            <>
            <h2>Users</h2>
            <ul>
                {this.state.users.map(u => (
                    <li key={u.id}>{u.username}</li>
                ))}
            </ul>
            </>
        )
    }


//     componentDidMount() {
//         {/*for localStorage */}
//         const headers = { authorization: localStorage.getItem('jwt') };
// {/*Hard coding for now, but this is not how it should be. we would need 
// an environment variable. It is good f */}
//         const endpoint = 'http://localhost:9090/api/users';
//         axios.get('endpoint', { headers })
//         .then(res => {
//             this.setState({ users: res.data });
//         }).catch(e => {
//             console.error(e);
//         });
//     }

    componentDidMount() {
        {/*for localStorage */}
        const headers = { authorization: localStorage.getItem('jwt') };
{/*Hard coding for now, but this is not how it should be. we would need 
an environment variable. It is good f */}

        axios.get('/users')
        .then(res => {
            this.setState({ users: res.data });
        }).catch(e => {
            console.error(e);
        });
    }
}

export default requireAuth(Users);