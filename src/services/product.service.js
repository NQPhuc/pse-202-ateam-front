import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class ProductService{
    static async getAllProduct(){
        return (await axiosDefault.get('/product')).data;
    }
    
    static async getProduct(productId){
        return (await axiosDefault.get('/product/id'), { params: {pid: productId}}).data;
    }

    static async searchProduct(productName){
        return (await axiosDefault.get('/product/name'), { params: {name: productName}}).data;
    }
}