import React from 'react'
import {Line} from './Styled'

export default function Timesheet({timesheet,index}) {

	return (
		<Line>
			{timesheet.name}
		</Line>
	)
}
