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

    /**
     * Add a new order for the current customer (can either be a registered customer or guest)
     * @param {*} OrderContent - this is an object with 2 field: a list itemList and a number TotalPrice
     *          OrderContent: { 
     *              itemList: [{
                        ProductId: { type: String },
                        ProductName: { type: String },
                        Quantity: { type: Number }
                    }],
                    TotalPrice: {type: Number}
                }
                ; the ProductName field can be left blank, the server will automatically insert the right name for that product
                ; TotalPrice value is not important, because the server will re-calculate the total price of the order for security reason
     * @param {*} CustomerName - If logged in, this field can be left blank because it doesn't matter for registered customer.
     * @param {*} RecipientName
     * @param {*} Address 
     * @param {*} ContactNumber 
     * @returns 
     */
    static async createNewOder(OrderContent, CustomerName, RecipientName, Address, ContactNumber){
        return (await axiosWithCookies.post('/order',{
            OrderContent: OrderContent,
            CustomerName: CustomerName,
            RecipientName: RecipientName,
            Address: Address,
            ContactNumber: ContactNumber
        })).data;
    }

    /**
     * This set the corresponding order payment's status to true and its info to the paymentInfo if successed 
     * @param {*} orderId 
     * @param {*} paymentInfo 
     * @returns 
     * "OK": if success;
     * "Payment rejected": if payment rejected (for testing, there's 20% chance that a rejection will happen);
     * "Failed": if there's an database save error;
     * "This order is not yours": for testing only;
     * "No order with such id exist": self-explantory;
     * "Invalid session": if session expired;
     */
    static async setOrderPaymentInfo(orderId, paymentInfo){
        return (await axiosWithCookies.put('order/user/payment', {
            orderId: orderId,
            paymentInfo: paymentInfo
        })).data;
    }

    /**
     * Set an order's OrderStatus to a value from an enum - required an administrator session
     * @param {String} orderId 
     * @param {Number} status an integer from 0-3 for OrderStatus in this enum ["Processing", "Packaging", "Delivering", "Complete"]
     * @returns
     * "OK": if success;
     * "Failed": if there's an database save error
     * "Status must be an integer from 0-3": see parameter 'status' description
     * "No order with such id exist": self-explantory;
     * "Invalid session": if session expired;
     */
    static async setOrderStatus(orderId, status){
        return (await axiosWithCookies.put('order/admin/status', {
            orderId: orderId,
            status: status
        })).data;
    }
}