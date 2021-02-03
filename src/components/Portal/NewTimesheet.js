import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Label, Input, CommentTextInput} from './Styled'
import {createTimesheet, getTimesheet, updateTimesheet} from './services/timesheetServices'
import {useGlobalState} from './utils/stateContext'

export default function NewTimesheet() {
	const initialFormState = {
		name: '',
		date: '',
		start_time: '',
		end_time: '',
		total_hours: '',
		comments: ''

	}

	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch} = useGlobalState()


	useEffect(() => {
		if(id) {
			getTimesheet(id)
			.then((timesheet) => {
				console.log(timesheet)
				setFormState({
					name: timesheet.name,
					date: timesheet.date,
					start_time: timesheet.start_time,
					end_time: timesheet.end_time,
					total_hours: timesheet.total_hours,
					comments: timesheet.comments
				})
			})
		}
	},[id])


	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleClick(event) {
		event.preventDefault()
		if(id) {
			updateTimesheet( {id: id, ...formState})
			.then(() => {
				dispatch({type: 'updateTimesheet', data: {id: id, ...formState}})
				history.push(`/portal/${id}`)
			})
		}
		else {
			createTimesheet({...formState})
			.then((timesheet) => {
		
				dispatch({type: 'addTimesheet', data: timesheet})
				history.push('/portal')
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<form>

			<Label>Name:</Label>
			<div></div>			
			<Input type='text' name='name' value={formState.name} onChange={handleChange}></Input>
			<div></div>
			<Label>Date:</Label>
			<div></div>			
			<Input type='date' name='date' value={formState.date} onChange={handleChange}></Input>
			<div></div>

			<Label>Start Time:</Label>		<div></div>
			<Input type='text' name='start_time' value={formState.start_time} onChange={handleChange}></Input>
			<div></div>
			
			<Label>End Time:</Label>		<div></div>	
			<Input type='text' name='end_time' value={formState.end_time} onChange={handleChange}></Input>
			<div></div>

			<Label>Total Hours:</Label>		<div></div>	
			<Input type='integer' name='total_hours' value={formState.total_hours} onChange={handleChange}></Input>
			<div></div>

			<Label>Comments:</Label>		<div></div>	
			<CommentTextInput type='text' name='comments' value={formState.comments} onChange={handleChange}></CommentTextInput>
			<div></div>

			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</form>
	)
}

