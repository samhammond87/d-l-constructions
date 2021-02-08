import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.h1`
  font-family: 'Encode Sans Expanded', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  color: #009879;

  @media (max-width: 500px) {
    font-size: 22px;
    color: black;
  }
`;

export const Panel = styled.div`
  text-align: center;
  margin-top: 33px;
`;

export const UserPanel = styled.div`
  text-align: center;
  /* height: 720px; */
  /* margin-bottom 30px; */
  /* width: 480px; */
  /* padding: 32px; */
  margin-top: -23px;
`;

export const UserParagraph = styled.div`
  color: white;
`;

export const Span = styled.span`
  padding: 0.5em;
  margin: 1em;
  font-family: 'Encode Sans Expanded', sans-serif;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 0px 0;
  width: 100%;
  opacity: 0.7;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const UserButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  height: 1em;
  margin: 0.5em;
`;

export const UserInput = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #97979b;

  &:focus {
    background-color: white;
    outline: none;
  }
`;

export const CommentTextInput = styled(Input)`
  height: 100px;
  width: 400px;
`;

export const Label = styled.span`
  font-family: 'Encode Sans Expanded', sans-serif;
  color: black;
`;

export const UserLabel = styled.label`
  font-family: 'Encode Sans Expanded', sans-serif;
  color: white;
  text-align: left;
`;

export const Line = styled.div`
  color: black;
  background-color: white;
  font-size: 1.5em;
  font-family: 'Encode Sans Expanded', sans-serif;
  padding: 0.5em;
`;

// Sign in form
export const Container = styled.div`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;

  &:focus {
    background-color: white;
    outline: none;
  }
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #03214f;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  background: #97979b;

  &:focus {
    background-color: white;
    outline: none;
  }
`;

export const FormButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  width: 100%;
  opacity: 0.7;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const idLink = styled.link`
  text-align: center;
  margin-top: 24px;
  color: red;
  font-size: 14px;
  background: red;
`;
