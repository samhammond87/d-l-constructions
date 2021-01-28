import React from 'react'
import {useHistory} from 'react-router-dom'
import {Button, Panel, Span} from './Styled'
import {useGlobalState} from '../utils/stateContext'
import {signOut} from '../services/authServices'

export default function Nav(setRandomTimesheet) {
	let history = useHistory()

	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store

	function fetchRandomTimesheet(event) {
		// event.preventDefault()
		// getRandomTimesheet()
		// .then((timesheet) => {
		// 	setRandomTimesheet(timesheet)
		// 	history.push('/random')
		// })
		// .catch((error) => console.log(error))
	}

	function handleSignOut(event) {
		event.preventDefault()
		signOut(loggedInUser)
		.then(() => {
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
		})
	}

	return (
		<Panel>
			{/* <Button onClick={fetchRandomTimesheet}>Random Timesheet</Button> */}
			<Button onClick={() => history.push('/timesheets')}>Home</Button>
			{loggedInUser ?
				<>
				<Button onClick={handleSignOut}>Sign Out</Button>	
				<Button onClick={() => history.push('/timesheets/new') }>Add Timesheet</Button>	
				<Span>{loggedInUser}</Span>
				</>
			:
				<>
				<Button onClick={() => history.push('/register')}>Register</Button>
				<Button onClick={() => history.push('/sign_in')}>Sign In</Button>
				</>
			}
		</Panel>
	)
}
