import React from 'react'
import {Link} from 'react-router-dom'
// import styled from 'styled-components'
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
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Date</th>
								<th>Start Time</th>
								<th>End Time</th>
								<th>Total Hours</th>
							</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<Link key={timesheet.id} to={`/portal/${timesheet.id}`}>
											<Timesheet index={index} timesheet={timesheet} />
										</Link>
									</td>
									<td>
										{timesheet.date}
									</td>
									<td>
										{timesheet.start_time}
									</td>
									<td>
										{timesheet.end_time}
									</td>
									<td>
										{timesheet.total_hours}
									</td>
								</tr>
							</tbody>

					</Table>
				)
			})}
		</div>
	)
}


