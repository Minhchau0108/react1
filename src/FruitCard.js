import React from 'react'
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function FruitCard({description, name, emoji, price }) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{name} {emoji}</Card.Title>
            <Card.Text>
                <div>{description}</div>
                <div>Price : ${price}</div>
            </Card.Text>
            <Button variant="primary">Buy</Button>
        </Card.Body>
    </Card>
    )
}
FruitCard.propTypes = {
    description: PropTypes.string,
    name: PropTypes.string,
    emoji: PropTypes.string,
    price: PropTypes.number,
}

export default FruitCard
