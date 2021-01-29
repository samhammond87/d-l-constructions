import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Button} from './Styled'
import {createTimesheet, getTimesheet, updateTimesheet} from '../services/timesheetServices'
import {useGlobalState} from '../utils/stateContext'

export default function NewTimesheet() {
	const initialFormState = {
		name: '',
		date: '',
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
		<div>
			<>Timesheet:</>
			<input type='text' name='total_hours' value={formState.total_hours} onChange={handleChange}></input>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
