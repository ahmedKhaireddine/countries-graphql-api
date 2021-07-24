import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Dashboard from '../components/home/Dashboard';
import Opening from '../components/home/Opening';
import { Container } from './Home.styles';
import { fetchCountries } from '../reducers/countries/Actions';

const Home = () => {
  const [toggle, setToggle]= useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <>
      {toggle ? (
        <Container onMouseEnter={() => {
          setTimeout(() => setToggle(false), 1000);
        }}>
          <Opening />
        </Container>
      ) : (
        <Container>
          <Dashboard />
        </Container>
      )}
    </>
  )
}

export default Home;