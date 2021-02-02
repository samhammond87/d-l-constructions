import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Timesheet from './Timesheet'
import {useGlobalState} from './utils/stateContext'
import Table from 'react-bootstrap/Table'

export default function Timesheets() {
	const {store} = useGlobalState()
	const {timesheets} = store
	if(!timesheets) return null

	return  (
		<div>
			{timesheets.map((timesheet,index) => {
				return (
					<Table striped bordered hover variant="dark">
						<thead>
							<tr>
							{/* <th>#</th> */}
							<th>Name</th>
							<th>Date</th>
							<th>Start Time</th>
							<th>End Time</th>
							<th>Total Hours</th>
							<th>Comments</th>
							</tr>
							</thead>
							<tbody>
								<tr>
									{/* <td>1</td> */}
									<td>
									<Link key={timesheet.id} to={`/portal/${timesheet.id}`}>
										<Timesheet index={index} timesheet={timesheet} />
									</Link>
									</td>
									<td>
										{timesheet.date}
									</td>
									<td>{timesheet.start_time}
									</td>
									<td>{timesheet.end_time}
									</td>
									<td>{timesheet.total_hours}
									</td>
									<td>{timesheet.comments}
									</td>
								</tr>
							</tbody>

					</Table>
				)
			})}
		</div>
	)
}


