import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  z-index: 999;

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
  display: flex;
  justify-content: center;
`;

export const SmurfFormContainer = styled.div`
  width: 100%;
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
  transition: 0.3s ease-in-out;

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
  background-color: #ff6347;
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

export const SmurfContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${secondaryColor};
  width: 250px;
  margin: 10px;
  border-radius: 5px;
  font-size: ${normalFontSize};
  z-index: 100;
  background-color: white;
  box-shadow: 3px 3px 10px -4px rgba(0,0,0,0.75);


  h3 {
    display: flex;
    justify-content: space-between;

    a {
      color: black;
      &:hover {
        color: ${primaryColor};
      }
    }
  }
`;

export const StyledButton = styled.button`
  color: ${props => (props.delete ? 'lightcoral' : `${primaryColor}`)};
  padding: 5px;
  margin: 5px 0;
  border: 1px solid
    ${props => (props.delete ? 'lightcoral' : `${primaryColor}`)};
  border-radius: 3px;
  cursor: pointer;
  width: 100px;
  align-self: flex-end;

  &:hover {
    background-color: ${props =>
      props.delete ? 'lightcoral' : `${primaryColor}`};
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  color: ${primaryColor};
  padding: 2px;
  border: 1px solid ${primaryColor};
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  width: 100px;
  align-self: flex-end;

  &:hover {
    background-color: ${primaryColor};
    color: white;
  }
`;

export const SmurfDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid ${secondaryColor};
  width: 50%;
  margin: 10px;
  border-radius: 5px;
  font-size: ${normalFontSize};
  box-shadow: 3px 3px 10px -4px rgba(0,0,0,0.75);

  h3 {
    display: flex;
    justify-content: space-between;

    a {
      color: black;
      &:hover {
        color: ${primaryColor};
      }
    }
  }

  h3, strong, p {
    align-self: flex-start;
  }
`;

export const SmurfImage = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 0;
  display: flex;
  width: 100%;
`;
