import React from "react";
import {Button, Card} from "react-bootstrap";


export default function CardPaco({name="El Paco", ubicacion="Zapopan, Jalisco", imagen="/1517003198970.jpeg"}) {
    return (
        <Card >
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {ubicacion}
          </Card.Text>
          <Button variant="primary">Go to OnlyFans</Button>
        </Card.Body>
      </Card>
    )
  }

