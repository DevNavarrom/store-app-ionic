import { IonList } from '@ionic/react';
import { Product } from '../interfaces/product';
import ProductCard from './ProductCard';

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    return (
        <IonList>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </IonList>
    );
};

export default ProductList;