import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthorList from '../components/AuthorList';





const Main = (props) => {
    const [allAuthors, setAllAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAllAuthors(res.data);

            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const removeAuthor = (authorId) => {
        setAllAuthors(allAuthors.filter(author => author._id !== authorId));
    }

    return (
        <>
            <div className="w-50 mx-auto text-center">
                <Link to='/authors/create'>
                    <button className="btn btn-warning m-3">
                        New Author
                    </button>
                </Link>
            </div>

            <div>
                {<AuthorList allAuthors={allAuthors} removeAuthor={removeAuthor} />}
            </div>
        </>

    )
}

export default Main;