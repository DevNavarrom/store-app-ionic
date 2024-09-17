import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../store/wishlist/wishlist.slice';
import { RootState } from '../store/store';
import { Product } from '../interfaces/product';
import { heartSharp, heartDislikeSharp, bagAddSharp } from 'ionicons/icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  
  const dispatch = useDispatch();
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const isInWishlist = wishlist.some(item => item.id === product.id);


  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };


  return (
    <IonCard className='ion-margin'>
      <img alt="Silhouette of mountains" src={product.images[0]} />
      <IonCardHeader>
        <IonCardTitle>{product.title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
            <IonRow className="ion-align-items-center">
                <IonCol>
                    <p>Price: ${product.price}</p>
                </IonCol>
                <IonCol size="auto">
                    <IonButton fill="clear" onClick={handleWishlistToggle}>
                        {isInWishlist ? <IonIcon slot="icon-only" icon={heartDislikeSharp}></IonIcon> : <IonIcon slot="icon-only" icon={heartSharp}></IonIcon>}
                    </IonButton>
                </IonCol>
            </IonRow>
            <IonRow className="ion-align-items-center">
                <IonCol>
                    <IonButton expand="full" fill="outline" shape="round">
                        <IonIcon slot="start" icon={bagAddSharp}></IonIcon>
                        Add to Bag
                    </IonButton>
                </IonCol>
            </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;