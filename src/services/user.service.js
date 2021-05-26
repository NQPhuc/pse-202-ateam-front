import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class UserService{
    /**
     * @param {String} usernameValue 
     * @param {String} passwordValue 
     * @param {String} firstname 
     * @param {String} lastname 
     * @param {String} email 
     * @param {String} phone 
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
     * @param {String} productId
     * @returns "OK" or "Failed" or "Invalid session" or "No product with such pid exist"
     */
    static async addSingleItemToCart(productId){
        return (await axiosWithCookies.post('/user/cart', {pid: productId})).data;
    }

    /**
     * This update the whole user CartContent value to the parameter 'cart'
     * @param {[ProductId: string, Quantity: number]} cart -check database or BE model/core folder to understand
     * @returns "OK" or "Failed" or "Invalid session"
     */
    static async editCart(cart){
        return (await axiosWithCookies.put('/user/cart', {cartContent: cart})).data;
    }

    /**
     * This reduce the quantity of the corresponding product in cart by 1
     * @param {String} productId 
     * @returns 
     * "OK": if ok;
     * "Failed": if failed;
     * "Invalid session": if session expired;
     * "No product with such pid exist": if productId is wrong;
     * "Quantity must be greater than zero": if quantity of product in cart is < 1;
     */
    static async reduceOneItemFromCart(productId){
        return (await axiosWithCookies.put('/user/cart/quantity/one', {pid: productId})).data;
    }

    /**
     * Remove a productFromCart
     * @param {*} productId 
     * @returns 
     * "OK": if ok;
     * "Failed": if failed;
     * "Invalid session": if session expired;
     * "No product with such pid exist": if that product is no longer in the cart;
     */
    static async removeProductFromCart(productId){
        return (await axiosWithCookies.delete('/user/cart/product', { params: {pid: productId} })).data;
    }

    /**
     * Ask the server to calculate the total price all items in cart for you
     * @returns 
     * "Invalid session": if session expired;
     * TotalPrice: integer, if success;
     */
    static async getCartTotalPrice(){
        return (await axiosWithCookies.get('/user/cart/totalprice')).data;
    }
}
