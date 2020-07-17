import axios from "axios";

export default{
    userLogin: function(user, password){
        return axios.post('/login', {
            email: user,
            password: password
        })},
    isLoggedIn: function(){
        return axios.get('/profile')
    },
    getUser: function(){
        return axios.get('/user/:id')
    }
}