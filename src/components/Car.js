import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    let id = props.match.params.id
    console.log(id)
    return (
        <h1>A specific car</h1>

    )
}

export default Car