import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CardErick({name="Erick", image="/erick.jpg", location="Paraíso, Tabasco, MX"}) {
    return (
        <Card>
        <Card.Img src={image}/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Me gusta mucho la tecnologia, los videouegos, la naturaleza y la Geopolitica,
              Disfruto mucho conocer nuevos lugares y las aventuras implicadas.
            </Card.Text>
            <Card.Text>
            {location}
            </Card.Text>
            <Button variant="primary"> Go to DeepWeb Store </Button>
        </Card.Body>
        </Card>
    )
  }
  