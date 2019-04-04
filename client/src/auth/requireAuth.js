
import React from 'react';
import axios from 'axios';

// this may be needed if you actually deployed it
const baseURL = `S{process.env.API_URL}/api`

axios.defaults.baseURL = 'http://localhost:9090/api';


axios.interceptors.request.use(
    // takes cb function and then takes in the options from the 
    // something form.
    function(options) {
        options.headers.authorization = 
        localStorage.getItem('jwt');

        return options;
    },
    function(error) {
        return Promise.reject(error);
    }
);

{/* Almost like middleware for the frontend */}
export default function(Component) {
    return class Authenicated extends
    React.Component {
        // if token exists, return it
        render (){
            const token = localStorage.getItem('jwt');

            const notLoggedIn = <div>Please login to proceed </div>

            // checking for token, if it exists, we return it and get the users.
            // if token does not exist, we get the not logged in default div.
            return <> {token ? <Component 
                {...this.props} /> : notLoggedIn} </>
        }
    }
}