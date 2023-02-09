import React, { useEffect, useState } from 'react';
import CountButton from './CountButton/CountButton';
import SearchBar from './SearchBar/SearchBar';
import Button from './Button/Button';

const products = [
    'tooth paste',
    'tooth brush',
    'mouth wash',
    'dental floss',
    'mouth guard',
];


const App = () => {

    const [productState, setProductsState] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=> {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState);
            })
    }, [])

    const hasProducts = productState.length > 0
  
    return (
        <div>
            <Button buttonText='myButton' />
            {/* <CountButton incrementBy={5} butttonColor='blue' />
            {hasProducts ? <SearchBar products={productState}/> : "Loading"} */}
                {/* <SearchBar products={[
                    'bike rack',
                    'mountain bike',
                    'soccer ball'
                ]}/> */}
        </div>
    )
}

export default App;