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

    /**
     * @returns an object {Name, Role, CartContent} of the user with sessionId in cookie
     * This function calls the same api as AuthenticateService.getNameAndRoleFromSession, I just add more here to improve visibility.
     */
     static async getUserCartContent(){
        return (await axiosWithCookies.get('/auth')).data;
    }

    /**
     * this add a new product to userCart, or increase its quantity by 1 if its already in there
     * @param {*} productId
     * @returns "OK" or "Failed" or "Invalid session"
     */
    static async addSingleItemToCart(productId){
        return (await axiosWithCookies.post('/user/cart', {pid: productId})).data;
    }

    /**
     * This update the whole user CartContent value to the parameter 'cart'
     * @param {*} cart - type: CartContent{[ProductId: string, Quantity: number]} //check database or BE core folder to understand
     * @returns "OK" or "Failed" or "Invalid session" 
     */
    static async editCart(cart){
        return (await axiosWithCookies.put('/user/cart', {cartContent: cart})).data;
    }
}
