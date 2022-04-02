import React from 'react';
import {Card, ListGroupItem, ListGroup} from 'react-bootstrap';
import '../sass/app.scss';


function CardAldahir(props){ 
    const {img, nombre, nickname, ubicacion, edad} = props;
    return(
        <div className="Card-Aldahir">
        <Card style={{ width: '100%' }}>
        <Card.Img src={img} />
        <Card.Body>
          <Card.Title>Card Aldahir 🏀 </Card.Title>
          <Card.Text>
            Practicando React y Git Flow 🌵 
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
        <ListGroupItem><span>Nombre:</span> {nombre}</ListGroupItem>
          <ListGroupItem><span>Nickname: </span>{nickname}</ListGroupItem>
          <ListGroupItem><span>Edad: </span>{edad}</ListGroupItem>
          <ListGroupItem><span>Ubicación: </span>{ubicacion}</ListGroupItem>
        </ListGroup>
      </Card>
      </div>
    );
}

export default CardAldahir;