
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }
    render() {
        return (
            <>
            <h2>Login</h2>
            <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="username">username</label>
                    <input 
                    placeholder="username"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    type="text"
                    />
                 <label htmlFor="password">password</label>
                    <input 
                    placeholder="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    type="text"
                    />
            </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>

            </>
        )
    }

    handleInputChange = event => {
        // updates state as the user fills out the form
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log('target', event.target.value)
    };

    handleSubmit = event => {
        // send a post request with form data
        event.preventDefault();

        const endpoint = 'http://localhost:9090/api/auth/login';

        axios.post(endpoint, this.state)
        .then (res => {
            localStorage.setItem('jwt', res.data.token)
            console.log('response data: ', res.data)
        }).catch(e => {
            console.error(e);
        })
    };
}

export default Login;