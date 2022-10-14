// create your App component here
import React, {useState, useEffect} from 'react';

function App() {

    const [dogImg, setDogImg] = useState(null);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then(resp => resp.json())
        .then((dog) => {
            console.log(dog.message);
            setDogImg(dog.message)
        })
    }, []);

    return (
        dogImg ? <img alt="A Random Dog" src={dogImg}></img> : <p>Loading...</p> 
    )
}

export default App;