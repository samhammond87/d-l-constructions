import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {Label, BigTextInput, Button} from './Styled'
import {createTimesheet, getTimesheet, updateTimesheet} from '../services/timesheetServices'
import {categories} from '../utils/categories'
import {useGlobalState} from '../utils/stateContext'

export default function NewTimesheet() {
	const initialFormState = {
		name: '',
		date: '',
		total_hours: 5,
		comments: ''
	}

	const [formState,setFormState] = useState(initialFormState)
	let history = useHistory()
	let {id} = useParams()
	const {dispatch, store} = useGlobalState()
	const {timesheets} = store;

	useEffect(() => {
		if(id) {
			getTimesheet(id)
			.then((timesheet) => {
				console.log(timesheet)
				// const category = categories.find((category) => category.name.toLowerCase() === timesheet.category.toLowerCase())
				setFormState({
					name: timesheet.name,
					date: timesheet.date,
					total_hours: timesheet.total_hours,
					comments: timesheet.comments
				})
			})
		}
	},[id])

	// function getLastId() {
	// 	console.log(timesheets)
	// 	const ids = timesheets.map(timesheet => timesheet.id)
	// 	console.log(ids)
	// 	return
	// }


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
			// const nextID = getLastId() + 1
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
			{/* <Label>Category:</Label> */}
			{/* <select name='category_id' value={formState.category_id} onChange={handleChange}>
				{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
			</select> */}
			<>Timesheet:</>
			<input type='text' name='total_hours' value={formState.total_hours} onChange={handleChange}></input>
			<Button onClick={handleClick}>{id ? 'Update' : 'Create'}</Button>
		</div>
	)
}
