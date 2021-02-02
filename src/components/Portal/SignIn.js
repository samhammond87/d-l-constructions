import React,{useState} from 'react'
import {Button, 
		Label, 
		Input,
		Container,
		FormWrap,
		Icon,
		FormContent,
		Form,
		FormH1,
		FormLabel,
		FormInput,
		FormButton,} from './Styled'
import {signIn} from './services/authServices'
import {useGlobalState} from './utils/stateContext'

export default function SignIn({history}) {
	const initialFormState = {
		email: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()
	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}
	function handleSubmit(event) {
		event.preventDefault()
		signIn(formState)
		.then(({username, jwt}) => {
			sessionStorage.setItem("token", jwt) // setItem allows a key and a value 
			sessionStorage.setItem("user", username)
			dispatch({type: 'setLoggedInUser', data: username})
			dispatch({type: 'setToken', data: jwt})
			history.push('/portal')
		})
		.catch((error) => console.log(error))

	}
	return (
	<>
		<Container>
			<FormWrap>
				<Icon to="../">D & L Constructions</Icon>
				<FormContent>
					<Form action="#">
						<FormH1>Employee Login:</FormH1>
						<FormLabel htmlFor="for">Email</FormLabel>
						<FormInput type='email' name='email' value={formState.username} onChange={handleChange}></FormInput>
						<FormLabel htmlFor="for">Password:</FormLabel>
						<FormInput type='password' name='password' value={formState.password} onChange={handleChange}></FormInput>
						<FormButton onClick={handleSubmit}>Log in</FormButton>
					</Form>
				</FormContent>
			</FormWrap>
		</Container>
	</>
	)
}
