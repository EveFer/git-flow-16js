import React from 'react'
import Card from 'react-bootstrap/Card'

export default function CrisCard({name="cris", image="/git-flow-16js/public/cris.jpg", location="CDMX"}) {
  return (
    <Card style={{ width: '18rem' }}>
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