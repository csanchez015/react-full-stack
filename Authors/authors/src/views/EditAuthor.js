import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const UpdateAuthor = (props) => {
    const { _id: id } = useParams();
    const [name, setName] = useState("");

    const [errors, setErrors] = useState({}); 

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedAuthor = {
            name
        }

        axios.patch(`http://localhost:8000/api/authors/${id}/update`, updatedAuthor)
            .then((res) => {
                console.log(res.data);
                navigate('/authors');
            })
            .catch(err => {
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return (
        <>
            <h2 className="m-50 mx-auto text-center text-primary">Edit Author:</h2>
            <div className="w-50 p-4 rounded mx-auto shadow mt-5 mb-5">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="h6">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => { setName(e.target.value) }}
                            value={name} />
                    </div>
                    {
                        errors.name && (
                            <span className='text-danger'>{errors.name.message}</span>
                        )
                    }
                    <div className="text-center">
                        <Link to='/authors'>
                            <button className="btn btn-secondary">
                                Cancel
                            </button>
                        </Link>
                        <input type="submit" className="btn btn-info m-3" value="Update Author" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default UpdateAuthor;