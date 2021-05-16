import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class ProductService{
    /**
     * NOTE: this only return products that aren't disabled
     * @returns an array [Product]
     * where Product is: {
     *  Name: { type: String, require: true, index: true },
     *  Price: { type: mongoose.Decimal128, require: true },
     *  Quantity: { type: Number, require: true, min: 0 },
     *  Color: { type: String, require: true },
     *  Size: { type: String, require: true },
     *  image: { type: String, require: true },
     * }
     */
    static async getAllProduct(){
        return (await axiosDefault.get('/product')).data;
    }
    
    /**
     * @param {*} productId 
     * @returns Product corresponding to productId
     */
    static async getProduct(productId){
        return (await axiosDefault.get('/product/id', { params: {pid: productId} }) ).data;
    }

    /**
     * @param {*} productName 
     * @returns an array [Product] with name similar to productName
     */
    static async searchProduct(productName){
        return (await axiosDefault.get('/product/name', { params: {name: productName}}) ).data;
    }

    /**
     * Add a new product document into database
     * @param {*} name 
     * @param {*} price 
     * @param {*} quantity 
     * @param {*} color 
     * @param {*} size 
     * @param {*} image 
     * @returns "OK" if success; "Failed" if there's an error; "Not Authorized" if user is not login with Admin privilege 
     */
    static async addNewProduct(name, price, quantity, color, size, image){
        return (await axiosWithCookies.post('/product', {
            name: name, price: price, quantity: quantity,
            color: color, size: size, image: image
        })).data;
    }

    /**
     * Add a product database with new value
     * @param {*} id id of the product to be updated
     * @param {*} name 
     * @param {*} price 
     * @param {*} quantity 
     * @param {*} color 
     * @param {*} size 
     * @param {*} image 
     * @returns "Not Authorized" if user is not login with Admin privilege;
     *  Else: ??? need more test
     */
    static async editProduct(id, name, price, quantity, color, size, image){
        return (await axiosWithCookies.post('/product', {
            id: id, name: name, price: price, quantity: quantity,
            color: color, size: size, image: image
        })).data;
    }
}