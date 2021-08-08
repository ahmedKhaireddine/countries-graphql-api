import React from 'react';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import TableInfo from './TableInfo';
import { Box, BoxImage, BoxHeader, Container, Title } from './Details.styles';

const Details = () => {
  const { country: { name, flag }} = useSelector(state => state.countryData);

  return (
    <Container>
      <BoxHeader>
        <Link to="/">
          <ArrowBackIcon/>
        </Link>
        <Title>{name}</Title>
      </BoxHeader>
      <Box>
        <BoxImage>
          <img src={`http://localhost:4000/${flag}`} alt="" />
        </BoxImage>
        <TableInfo />
      </Box>
    </Container>
  );
}

export default Details;