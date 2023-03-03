import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res);
                setAllProducts(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const removeProduct = (productId) => {
        setAllProducts(allProducts.filter(product => product._id !== productId));
    }

    return (
        <div>
            <ProductForm />
            <hr />
            {loaded && <ProductList allProducts={allProducts} removeProduct={removeProduct}/>}
        </div>
    )

}

export default Main;