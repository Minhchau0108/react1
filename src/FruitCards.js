import React from 'react'
import FruitCard from './FruitCard'
import {CardDeck} from 'react-bootstrap';

function FruitCards({ fruits }) {
    return(
        <CardDeck>
            {fruits.map(fruit => <FruitCard description= {fruit.description} name = {fruit.name} emoji = {fruit.emoji} price = {fruit.price}/>)}
        </CardDeck>
    )
}
export default FruitCards
