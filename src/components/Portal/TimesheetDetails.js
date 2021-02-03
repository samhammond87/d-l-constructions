import React,{ useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import Moment from 'react-moment'
import {getTimesheet} from './services/timesheetServices'
import {Button, Panel} from './Styled'
import {useGlobalState} from './utils/stateContext'
import {deleteTimesheet} from './services/timesheetServices'

export default function TimesheetDetails() {
	const [timesheet, setTimesheet] = useState(null)
	const {id} = useParams()
	let history = useHistory()
	const {store,dispatch} = useGlobalState()
	const {loggedInUser} = store
	useEffect(() => {
		getTimesheet(id)
		.then((timesheet) => setTimesheet(timesheet))
		.catch((error) => console.log(error))
	},[id])

	if (!timesheet) return null
	function handleDelete() {
		deleteTimesheet(id)
		.then(() => {
			dispatch({type: 'deleteTimesheet', data: id})
			history.push('/portal')
		})
	}
	return (
		<div>
			<p>Written by: {timesheet.name}</p>			
			<p>Posted on: 
				<Moment format='D MMM YYYY'>{timesheet.posted}</Moment>
			</p>	
			<p>Date: {timesheet.date}</p>
			<p>Start Time: {timesheet.start_time}</p>
			<p>End Time: {timesheet.end_time}</p>		
			<p>Total Hours: {timesheet.total_hours}</p>
			<p>Comments: {timesheet.comments}</p>
			{loggedInUser === timesheet.name && // && is used for hiding and showing in jsx
				<Panel>
					<Button onClick={() => history.push(`/portal/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
			}
			{loggedInUser.admin === true &&
				<Panel>
					<Button onClick={() => history.push(`/portal/update/${id}`)}>Update</Button>
					<Button onClick={handleDelete}>Delete</Button>
				</Panel>
			}
		</div>
	)
}
