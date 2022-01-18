import axios from 'axios'
import React, {useEffect,useState} from 'react'

const People = (props) => {
    const {id} = props
    const [apiData,setApiData] = useState({});
    const [isError, setIsError] = useState(false);
    // const [homeworld, setHomeworld] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((response) => {
            setIsError(false);
            console.log(response.data)
            setApiData(response.data)
            // axios.get(response.data.homeworld)
            // .then(homeworldResponse => {
            //     console.log(homeworldResponse.data.name)
            //     setHomeworld(homeworldResponse.data.name)
            // })
            // .catch((err) => console.log(err))
        })
        .catch((err) => {
            console.log(err)
            setIsError(true);
        })
    }, [props]);

    if(!isError) {
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Height: {apiData.height}</p>
                <p>Mass: {apiData.mass}</p>
                <p>Hair Color: {apiData.hair_color}</p>
                <p>Skin Color: {apiData.skin_color}</p>
                {/* <p>Homeworld: {homeworld}</p> */}
            </div>
        )
    } else {
        return (
            <div>
                <img src = 'https://i.ytimg.com/vi/yK48g9mCqrk/maxresdefault.jpg' alt = ''></img>
                <h3>These aren't the droids you're looking for</h3>
            </div>
        )
    }

}

export default People
