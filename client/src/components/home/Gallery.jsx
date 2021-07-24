import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import { Container, CardContainer } from './Gallery.styles';

const Gallery = () => {
  const { countries } = useSelector(state => state.countriesData);

  const galleryItemsJSX = countries.map((item, index) => {
    return <Card key={index} index={index + 1} item={item}/>
  });

  return (
    <Container>
      <CardContainer>
        {galleryItemsJSX}
      </CardContainer>
    </Container>
  );
}

export default Gallery;