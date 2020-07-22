import React from 'react';

class Profile extends React.Component {
    state = {
        isLoggedIn: 'false'
    }

    componentDidMount() {
        let user = localStorage.getItem('user');

        console.log(user);

        if (!user) {
            window.location = '/';
        };
    }
    
    render() {
        return (
            <div>
                <h1>Welcome to the Profile Page</h1>
            </div>
        )
    };
}

export default Profile;