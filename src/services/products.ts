import { CapacitorHttp, HttpResponse } from "@capacitor/core";
import { Product } from "../interfaces/product";

const API_URL = "https://api.escuelajs.co/api/v1";


export const fetchProducts = async(): Promise<Product[]> => {
    const options = {
        url: `${API_URL}/products`
    };

    const response: HttpResponse = await CapacitorHttp.request({...options, method: 'GET'});
    
    //return response['data'] as Product[];
    if (response['status'] === 200)
        return response['data'] as Product[];

    return [];
}


export const fetchProduct = async(idProduct: number) => {
    const options = {
        url: `${API_URL}/products/${idProduct}`
    };

    const response: HttpResponse = await CapacitorHttp.request({...options, method: 'GET'});

    return response;
}