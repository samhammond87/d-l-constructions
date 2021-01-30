import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Timesheet from './Timesheet'
import {useGlobalState} from '../utils/stateContext'

const StyledLink = styled(Link) `
	text-decoration: none;
`
export default function Timesheets() {
	const {store} = useGlobalState()
	const {timesheets} = store
	if(!timesheets) return null

	return  (
		<div>
			{timesheets.map((timesheet,index) => {
				return (
					<StyledLink key={timesheet.id} to={`/timesheets/${timesheet.id}`}>
						<Timesheet index={index} timesheet={timesheet} />
					</StyledLink>
				)
			})}
		</div>
	)
}
