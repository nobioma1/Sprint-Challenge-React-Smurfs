import styled from 'styled-components';

const primaryColor = '#88ccff';
const secondaryColor = '#808080';
const normalFontSize = '18px';

export const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${primaryColor};
  font-size: 20px;
  padding: 20px;

  a {
    text-decoration: none;
    color: white;
    &:hover {
      color: ${secondaryColor};
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

export const SmurfFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormSmurf = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;

  input {
    width: 100%;
    padding: 10px;
    margin: 5px;
    font-size: ${normalFontSize};
    border: 1px solid ${secondaryColor};
    color: ${secondaryColor};
    border-radius: 3px;

    &:focus {
      outline: 2px solid ${primaryColor};
    }

    button {
      color: red;
    }
  }
`;

export const Button = styled.button`
  width: 50%;
  font-size: ${normalFontSize};
  border-radius: 3px;
  padding: 5px;
  transition: .3s ease-in-out;

  &:hover {
    background-color: ${primaryColor};
    color: ${secondaryColor};
  }

  &:focus {
    outline: none;
  }
`;

export const Err = styled.div`
  width: 80%;
  background-color: #FF6347;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

export const SmurfsDiv = styled.div`
  h1 {
    color: ${secondaryColor};
    margin: 0;
  }
`;

export const SmurfsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
`;
