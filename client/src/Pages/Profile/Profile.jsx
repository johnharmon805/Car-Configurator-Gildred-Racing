import React from 'react';
import './Profile.css';

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
                <img id="meme" src="/Assets/Meme.jpg" height="400px" width="480px"/>
            </div>
        )
    };
}

export default Profile;