import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class OrderService{
    /**
     * Get all order in the database
     * @returns "Not Authorized" if user is not login with Admin privilege;
     *  Else: [Order]
     */
    static async getAllOrder(){
        return (await axiosWithCookies.get('/order')).data;
    }

    /**
     * Get all order belong to the current logged in user (identified by sessionId in cookies)
     * @returns 
     */
    static async getOrderOfUser(){
        return (await axiosWithCookies.get('/order/user')).data
    }
}