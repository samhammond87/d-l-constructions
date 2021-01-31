import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Timesheet from './Timesheet'
import {useGlobalState} from '../utils/stateContext'

export default function Timesheets() {
	const {store} = useGlobalState()
	const {timesheets} = store
	if(!timesheets) return null

	return  (
		<div>
			{timesheets.map((timesheet,index) => {
				return (
					<Link key={timesheet.id} to={`/portal/${timesheet.id}`}>
						<Timesheet index={index} timesheet={timesheet} />
					</Link>
				)
			})}
		</div>
	)
}
