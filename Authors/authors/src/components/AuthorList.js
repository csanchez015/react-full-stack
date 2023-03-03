import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AuthorList = (props) => {
    const { removeAuthor } = props;

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}/delete`)
            .then((res) => {
                console.log(res);
                removeAuthor(id);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (

        <div>
            <h3>We have quotes by:</h3>

            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Author</th>
                        <th scope="col">Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.allAuthors.map((author, i) => {
                            const { _id, name } = author;
                            return (
                                <tr>
                                    <th scope="row">
                                        <h3>{name}</h3>
                                    </th>
                                    <td>
                                        <Link to={`/authors/${_id}/update`}>
                                            <button className="btn btn-success m-3">
                                                Edit
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger m-3"
                                            onClick={(e) => handleDelete(author._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default AuthorList;