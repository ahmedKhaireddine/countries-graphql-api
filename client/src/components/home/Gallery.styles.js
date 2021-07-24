import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  text-align: center;
  padding: 60px 0;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 200px;
  height: 150px;
  margin: 125px auto;
  transform-style: preserve-3d;
  animation: animate 20s linear infinite;

  @keyframes animate {
    0% {
      transform: perspective(1000px) rotateY(360deg);
    }
    100% {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
`;