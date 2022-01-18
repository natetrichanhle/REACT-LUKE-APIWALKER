import React, {useState} from 'react'
import { navigate } from '@reach/router'

const Search = () => {
    const [category,setCategory] = useState('')
    const [id,setId] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Search for: </label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value = ''>-------</option>
                        <option value = 'people'>people</option>
                        <option value = 'planets'>planets</option>
                    </select>
                </div>
                <div>
                    <label>ID: </label>
                    <input type = 'text' onChange={(e) => setId(e.target.value)}></input>
                    <button type = 'submit'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Search
