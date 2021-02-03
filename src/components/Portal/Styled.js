import styled from 'styled-components' 
import { Link } from "react-router-dom";

export const Header = styled.h1 `
	font-family: Arial,sans-serif;
`

export const Panel = styled.div `
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`

export const Span = styled.span `
	padding: .5em;
	margin: 1em;
	font-family: Arial, sans-serif;

`

export const Button = styled(Span) `
	border: 1px solid black;
	cursor: pointer;
`

export const Input = styled.input `
	height: 1em;
	margin: .5em;
`

export const CommentTextInput = styled(Input) `
	height: 100px;
	width: 400px;
`

export const Label = styled.span `
	font-family: Arial,sans-serif;
	color: black;
`

export const Line = styled.div `
	color: black;
	background-color: white;
	font-size: 1.5em;
	font-family: Arial,sans-serif;
	padding: .5em;
`



export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #faed64;
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
  background: #010101;
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
`;

export const FormButton = styled.button`
  background: #faed64;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const idLink = styled.link`
  text-align: center;
  margin-top: 24px;;
  font-color: red;
  font-size: 14px;
  background: red;
`;
