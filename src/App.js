import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, CardDeck} from 'react-bootstrap';
import FruitCard from './FruitCard'
import FruitCards from './FruitCards'

const allItems = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];
function Fruit({id, value}){
  return (
    <p>{id} : {value} </p>
  )
};
function Fruits({fruits}){
  return(
    <div>
      {fruits.map(fruit => <Fruit id = {fruit.id} value = {fruit.value}/>)}
    </div>
  )
}

const fruits = [
	{ description: 'Good.', name: 'apple', emoji: '🍎', price: 0.5 },
	{ description: 'So so.', name: 'orange', emoji: '🍊', price: 0.2},
	{ description: 'Okay.', name: 'grape', emoji: '🍇', price: 1.2 },
	{ description: 'Excellent', name: 'pear', emoji: '🍐', price: 1.5 },
];


function App() {
  return (
    <Container>
      <h3>Render Component: Fruit</h3>
      {allItems.map(fruit => <Fruit id = {fruit.id} value = {fruit.value}/>)}

      <h3>Render Component: Array of Fruits</h3>
      <Fruits fruits = {allItems}/>

      <h3>Render Component: FruitCard</h3>
      <CardDeck>
        {fruits.map(fruit => <FruitCard description= {fruit.description} name = {fruit.name} emoji = {fruit.emoji} price = {fruit.price}/>)}
      </CardDeck>

      <h3>Render Component: FruitCards</h3>
      <FruitCards fruits={fruits} />  

    </Container>
  );
}

export default App;
