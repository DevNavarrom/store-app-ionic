import { createAnimation, IonContent, IonPage, IonSearchbar, IonText, useIonViewWillEnter } from '@ionic/react';
import type { Animation } from '@ionic/react';
import React, { useEffect, useRef, useState } from 'react';
import ProductList from '../components/ProductList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { fetchAllProducts } from '../store/products/products.thunk';
import { useAppDispatch } from '../store/hooks';
import { Product } from '../interfaces/product';

const Home: React.FC = () => {

    const textEl = useRef<HTMLIonTextElement | null>(null);
    const animation = useRef<Animation | null>(null);

    const dispatch = useAppDispatch();
    const productsItems = useSelector((state: RootState) => state.products.items);
    const [results, setResults] = useState<Product[]>([...productsItems]);


    useIonViewWillEnter(() => {
        try {
            dispatch(fetchAllProducts());

            if(productsItems) setResults(productsItems);

        } catch (error) {
          console.log('ERROR_FETCH_PRODUCTS',error);
        }
    });


    useEffect(() => {
        setResults(productsItems);
    }, [productsItems])


    useEffect(() => {
        animation.current?.play();
        if (animation.current === null) {
            animation.current = createAnimation()
              .addElement(textEl.current!)
              .duration(1500)
              .iterations(Infinity)
              .direction('alternate')
              .fromTo('color', 'blue', 'var(--color)');
          }
      }, [textEl]);


      const handleInput = (ev: Event) => {
        let query = '';
        const target = ev.target as HTMLIonSearchbarElement;
        if (target) query = target.value!.toLowerCase();
    
        setResults(productsItems.filter((d) => d.title.toLowerCase().indexOf(query) > -1));
      };
    

    return (
        <IonPage>
            <IonText ref={textEl} className='ion-text'>
                <h1>DISCOVER</h1>
            </IonText>
            <IonSearchbar showClearButton="always" debounce={1000} onIonInput={(ev: Event) => handleInput(ev)}></IonSearchbar>
            <IonContent className="ion-no-padding">
                <ProductList products={results} />
            </IonContent>
        </IonPage>
    );
};

export default Home;