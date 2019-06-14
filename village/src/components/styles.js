import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: #88ccff;
  font-size: 20px;
  padding: 20px;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: gray;
    }
  }
`;

export const NavContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;

  .active {
      color: gray;
    }
`;

export const MainContainer = styled.div`
  margin-top: 80px;
`;
