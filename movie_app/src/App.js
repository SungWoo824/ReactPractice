import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        rating : 5
    },
    {
        id: 2,
        name: "Gimbap",
        rating : 3.4
    },
    {
        id: 3,
        name: "bulgogi",
        rating : 4
    }
];

function Food({name, rating}) {
    return (
        <div>
            <h1>I Like {name}</h1>
            <h3>{rating} / 5.0</h3>
        </div>
    )

}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
}

function App() {
    return (
        <div className="App">
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} rating={dish.rating}/>
            ))}
        </div>
    );
}

export default App;
