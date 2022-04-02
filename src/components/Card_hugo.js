import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardHugo({imagen, name, ubicacion="Zapopan, Jalisco."}) {
  return (
    <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {ubicacion}
      </Card.Text>
      <Button variant="primary">Go to profile</Button>
    </Card.Body>
  </Card>
    
  )
}
