import axios from 'axios'
import React, {useState,useEffect} from 'react'

const Planets = (props) => {
    const {id} = props;
    const [apiData,setApiData] = useState({})
    const [isError,setIsError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((response) => {
            setIsError(false)
            console.log(response.data)
            setApiData(response.data)
        })
        .catch((err) => {
            console.log(err)
            setIsError(true)
        })
    }, [props])
    
    if(!isError){
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Climate: {apiData.climate}</p>
                <p>Terrain: {apiData.terrain}</p>
                <p>Surface Water: {apiData.surface_water}</p>
                <p>Population: {apiData.population}</p>
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

export default Planets
