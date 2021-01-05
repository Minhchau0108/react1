import React from 'react'
import { Card, Button } from 'react-bootstrap';

function FruitCard({description, name, emoji, price }) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{name} {emoji}</Card.Title>
            <Card.Text>
                <p>{description}</p>
                <p>Price : ${price}</p>
            </Card.Text>
            <Button variant="primary">Buy</Button>
        </Card.Body>
    </Card>
    )
}

export default FruitCard
