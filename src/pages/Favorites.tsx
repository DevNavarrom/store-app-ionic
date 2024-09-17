import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Favorites: React.FC = () => {

    const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favorites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <ProductList products={wishlistItems} />
            </IonContent>
        </IonPage>
    );
};

export default Favorites;