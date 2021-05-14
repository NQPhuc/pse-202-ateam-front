import {axiosDefault, axiosWithCookies} from './axiosInstances';

export default class ProductService{
    static async getAllProduct(){
        return (await axiosDefault.get('/product')).data;
    }
}