import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../reducers/country/Actions';
import { Container } from './Country.styles';
import Details from '../components/country/Details';

const Country = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, country, error } = useSelector(state => state.countryData);

  useEffect(() => {
    dispatch(fetchCountry(id))
  }, [dispatch, id]);

  return loading ? (
    <>
      <h1>Loading</h1>
    </>
  ) : error ? (
    <>
      <h1>Error</h1>
    </>
  ) : Object.keys(country).length > 0 && (
    <Container>
      <Details/>
    </Container>
  );
}

export default Country;