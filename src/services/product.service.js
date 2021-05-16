import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class ProductService{
    /**
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

}