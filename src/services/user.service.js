import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class UserService{
    /**
     * Create a document in User collection of the database
     * @param {*} usernameValue 
     * @param {*} passwordValue 
     * @returns 
     *  if success create new user: "OK"
     *  if fail: "Failed"
     */
    static async registerNewUser(usernameValue, passwordValue){
        return (await axiosDefault.post('/user/register', {username: usernameValue, password: passwordValue})).data;
    }

    
}