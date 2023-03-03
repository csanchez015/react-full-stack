import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const UpdateProduct = (props) => {
    const { _id: id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.patch(`http://localhost:8000/api/products/${id}/edit`, updatedProduct)
            .then((res) => {
                console.log(res.data);
                navigate('/products');
            })
            .catch(err => {
                console.log(err);
            })
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
            <div className="w-50 p-4 rounded mx-auto shadow mt-5 mb-5">
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="h6">Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => { setTitle(e.target.value) }}
                            value={title} />
                    </div>
                    <div className="form-group">
                        <label className="h6">Price:</label>
                        <input
                            type="number"
                            className="form-control"
                            onChange={(e) => { setPrice(e.target.value) }}
                            value={price} />
                    </div>
                    <div className="form-group">
                        <label className="h6">Description:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => { setDescription(e.target.value) }}
                            value={description} />
                    </div>
                    <input type="submit" className="btn btn-primary btn-outline-dark mt-3" value="Update Product" />
                </form>
            </div>
        </>
    )
    
}

export default UpdateProduct;