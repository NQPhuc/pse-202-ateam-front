import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class AuthenticateService{
    static async login(usernameValue, passwordValue){
        return (await axiosWithCookies.post('/auth/login', {username: usernameValue, password: passwordValue})).data;
    }

    static async logout(){
        return (await axiosWithCookies.get('/auth/logout')).data;
    }

    static async getNameAndRoleFromSession(){
        return (await axiosWithCookies.get('/auth')).data;
    }
}