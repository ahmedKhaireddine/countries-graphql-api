import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Picture, TitleCard } from './Card.styles';

const Card = ({index, item: { id, flag, name }}) => {
  return (
    <Link to={`/countries/${id}`}>
      <Container index={index}>
        <Picture src={`http://localhost:4000/${flag}`}/>
        <TitleCard>{name}</TitleCard>
      </Container>
    </Link>
  );
}

export default Card;