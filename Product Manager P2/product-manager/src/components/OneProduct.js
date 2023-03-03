import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OneProduct = (props) => {
    const { _id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [_id])

    if (!product) {
        return <h1>loading...</h1>
    }

    return (
        <>
            <div className="w-50 mx-auto m-5">
                <Link to='/products'>
                    <button className="btn btn-outline-dark ">
                        Back to Products
                    </button>
                </Link>
            </div>
            <div className="w-50 mx-auto shadow mt-5 rounded border p-5">
                <h2>Title: {product.title}</h2>
                <h4>Price: ${product.price}</h4>
                <h5>Description: {product.description}</h5>
            </div>
        </>
    )
}

export default OneProduct;