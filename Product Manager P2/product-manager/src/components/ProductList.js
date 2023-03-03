import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const { removeProduct } = props;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}/delete`)
            .then((res) => {
                console.log(res);
                removeProduct(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="w-50 mx-auto text-center">
            <h1> All Products</h1>
            {
                props.allProducts.map((product, i) => {
                    const { _id, title } = product;
                    return (
                        <div key={i} className="shadow mb-3 rounded p-3">
                            <Link to={`/${_id}`}><h3>{title}</h3></Link>
                            < button className="btn btn-outline-danger"
                                onClick={(e) => handleDelete(product._id)}>
                                Delete Product
                            </button>
                            <Link to={`/products/${_id}/edit`}>
                                <button className="btn btn-outline-success m-3">
                                    Edit Product
                                </button>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
    
}

export default ProductList;