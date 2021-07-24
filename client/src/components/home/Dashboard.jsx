import React from 'react';
import Pagination from '../core/PaginationControlled';
import Gallery from './Gallery';
import { Container, H2 } from './Dashboard.styles';

const Dashboard = () => {
  return (
    <Container>
      <H2>Glimpse of the world</H2>
      <Gallery/>
      <Pagination/>
    </Container>
  );
}

export default Dashboard;