import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class UserService{
    /**
     * @param {*} usernameValue 
     * @param {*} passwordValue 
     * @param {*} firstname 
     * @param {*} lastname 
     * @param {*} email 
     * @param {*} phone 
     * @returns 
     *  if success create new user: "OK"
     *  if fail: "Failed"
     */
    static async registerNewUser(usernameValue, passwordValue, firstname, lastname, email, phone){
        return (await axiosDefault.post('/user/register', {
            username: usernameValue, password: passwordValue,
            firstname: firstname, lastname: lastname,
            email: email, phone: phone
        })).data;
    }


}
