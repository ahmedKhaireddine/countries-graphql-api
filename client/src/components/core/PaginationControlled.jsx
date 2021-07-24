import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../../reducers/countries/Actions';
import { Container } from './PaginationControlled.styles';

const LIMIT = 12;

const PaginationControlled = () => {
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    const paginate = {
      limit: LIMIT,
      offset: value === 1 ? 0 : value * LIMIT
    }

    dispatch(fetchCountries(paginate));
  }

  return (
    <Container>
      <Pagination count={20} onChange={handleChange}/>
    </Container>
  )
};

export default PaginationControlled;
