import styled from '@emotion/styled';

export const Container = styled.section`
  margin: 40px auto;

  ul {
    justify-content: center;
    color: #1e3d59;
  }

  .MuiButtonBase-root {
    color: #1e3d59;
  }

  .MuiPaginationItem-root {
    color: #1e3d59;
  }

  .MuiPaginationItem-page:hover {
    background-color: rgba(30, 61, 89, 0.09);
  }

  .MuiPaginationItem-page.Mui-selected {
    color: white;
    background-color: #1e3d59;
  }
`;