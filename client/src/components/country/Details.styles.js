import styled from '@emotion/styled';

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 60px;
  position: absolute; /* postulat de départ */
  top: 50%; left: 50%; /* à 50%/50% du parent référent */
  transform: translate(-50%, -50%);

  .MuiTableRow-root .MuiTableCell-root {
    border-bottom: 0px;
  }
`;

export const BoxHeader = styled.div`
  color: #1e3d59;
  display: flex;
  flex-direction: row;

  .MuiSvgIcon-root {
    font-size: 2.5em;
    margin: 22px 20px 30px 0;
    vertical-align: middle;
    fill: #1e3d59;
  }
`;

export const Title = styled.h1`
  margin: 20px 0 30px 0;
  text-transform: uppercase;
  overflow: hidden;
  font-size: 2.5em;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: italic;
  letter-spacing: .3rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  .MuiTableContainer-root {
    flex-basis: 50%;
  }

  .MuiTableCell-body {
    color: #1e3d59;
  }

  .MuiSvgIcon-root {
    color: #1e3d59;
  }
`;

export const BoxImage = styled.div`
  padding: 20px;
  width: 50%;

  img {
    width: 100%;
    height: 300px;
  }
`;