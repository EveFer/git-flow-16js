import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CardRubs() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img
        variant="top"
        src="https://scontent.fmex1-4.fna.fbcdn.net/v/t1.6435-9/161680261_10158835296321265_3687635151746521666_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHiPIWyjK9AeEnaLcpZMreg4Lmf4Qcwpr_guZ_hBzCmvyapYkpU9pZ2W8koNiWycWc&_nc_ohc=W0XRVWdBFmEAX9I3W9B&_nc_ht=scontent.fmex1-4.fna&oh=00_AT_4KHQKZj8KwRlrbfyUVzJuGSqbM_vQ2ZUt11oT4SAXwg&oe=626E350F"
      />
      <Card.Body>
        <Card.Title>RubsS</Card.Title>
        <Card.Text>
          Poner en práctica mis conocimientos así como incrementarlos y
          compartirlos. Poder llegar a hacer una diferencia positiva en el
          mundo, trabajando sobre objetivos en conjunto utilizando la tecnología
          como medio
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Coyoacán CDMX</ListGroupItem>
        <ListGroupItem>38 años</ListGroupItem>
        <ListGroupItem>Soltero</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/RubSDev">Github RubSDev</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardRubs;
