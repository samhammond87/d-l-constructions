import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button, Label, Input} from './Styled'
import {createTimesheet, getTimesheet, updateTimesheet} from '../services/timesheetServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewTimesheet() {
	const initialFormState = {
		name: '',
		date: '',
		start_time: '',
		end_time: '',
		total_hours: 0,
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
				history.push(`/timesheets/${id}`)
			})
		}
		else {
			createTimesheet({...formState})
			.then((timesheet) => {
		
				dispatch({type: 'addTimesheet', data: timesheet})
				history.push('/timesheets')
			})
			.catch((error) => console.log(error))
		}
	}
	return (
		<form>

			<Label>Name:</Label>			
			<Input type='text' name='name' value={formState.name} onChange={handleChange}></Input>

			<Label>Date:</Label>			
			<Input type='date' name='date' value={formState.date} onChange={handleChange}></Input>

			<Label>Start Time:</Label>			
			<Input type='text' name='start_time' value={formState.start_time} onChange={handleChange}></Input>
			
			<Label>End Time:</Label>			
			<Input type='text' name='end_time' value={formState.end_time} onChange={handleChange}></Input>

			<Label>Total Hours:</Label>			
			<Input type='integer' name='total_hours' value={formState.total_hours} onChange={handleChange}></Input>

			<Label>Comments:</Label>			
			<Input type='text' name='comments' value={formState.comments} onChange={handleChange}></Input>


			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</form>
	)
}

