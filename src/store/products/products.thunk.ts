import { fetchProducts } from "../../services/products";
import { type AppDispatch } from "../store";
import { setProducts } from "./products.slice";

export const fetchAllProducts = () => async(dispatch: AppDispatch) => {
    try {
        const response = await fetchProducts();

        dispatch(setProducts(response));
    } catch (error) {
      console.log('ERROR_FETCH_PRODUCTS',error);
    }
}