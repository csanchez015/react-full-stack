import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            title,
            price, 
            description
        }

        axios.post("http://localhost:8000/api/products/create", newProduct)
            .then((res) => {
                console.log(res.data);
                navigate('/products');
                
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="w-50 p-4 rounded mx-auto shadow mt-5 mb-5">
            <h2>Product Manager</h2>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h6">Title:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => {setTitle(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label className="h6">Price:</label>
                    <input 
                    type="number" 
                    className="form-control" 
                    onChange={(e) => {setPrice(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label className="h6">Description:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    onChange={(e) => {setDescription(e.target.value)}} />
                </div>
                <input type="submit" className="btn btn-primary btn-outline-dark mt-3" value="Create"/>
            </form>
        </div>
    )
}

export default ProductForm;