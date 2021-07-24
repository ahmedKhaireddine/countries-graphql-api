import React from 'react';
import { Container, Logo, Title, Span } from './Opening.styles';
import logo from './flame-fire-logo.png'

const Opening = (props) => {
  let title = "Hover to discover...";

  const spanElementsJSX = title.split('').map((letter, index) => {
    return <Span key={index} index={index + 1}>{letter}</Span>
  });

  return (
    <Container>
      <Logo src={logo}/>
      <Title>{spanElementsJSX}</Title>
    </Container>
  );
}

export default Opening;
