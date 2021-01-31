import styled from 'styled-components' 

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