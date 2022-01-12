import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const DateRange = ({ onOkClick }) => {
	const [startDate, setStartDate] = useState(new Date())
	const [endDate, setEndDate] = useState(new Date())
	function handleSelect(ranges) {
		console.log(ranges);
		setStartDate(ranges.selection.startDate)
		setEndDate(ranges.selection.endDate)
	}
	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	}
	return (
		<div style={{ position: 'absolute', left: '25%', margin: 'auto' }}>
			<DateRangePicker
				showSelectionPreview={false}
				showMonthAndYearPickers={false}
				months={2}
				direction='horizontal'
				ranges={[selectionRange]}
				onChange={handleSelect}
			/>
			<div style={{ height: '80px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
				<button onClick={() => onOkClick({ startDate, endDate })}>ok</button>
			</div>
		</div>
	)
}

export default DateRange
