import styled from '@emotion/styled';

export const Container = styled.section`
  height: 100vh;
`;
export const Logo = styled.img`
  width: 180px;
  height: 280px;
  vertical-align: middle;
  padding: 10px 20px;
  margin-top: 70px;
  @keyframes color-rotate {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }

  &:hover {
    animation: color-rotate 1s;
    animation-iteration-count: infinite;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  overflow: hidden;
  font-size: 3em;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: italic;
  letter-spacing: .4rem;
  text-transform: uppercase;
  color: #1e3d59;
`;

export const Span = styled.span`
  opacity: 0;
  animation: show 0.5s linear forwards;
  animation-delay: ${props => props.index && `calc(0.1s * ${props.index})`};

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;