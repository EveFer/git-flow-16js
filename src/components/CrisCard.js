import React from 'react'
import Card from 'react-bootstrap/Card'

export default function CrisCard({name="cris", image="/cris.jpg", location="CDMX"}) {
  return (
    <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {location}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}