import React, { useState } from 'react'
import DateRange from './DateRangePicker'
import styles from './input.module.css'

const CheckInOut = () => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [checkoutTime, setCheckoutTime] = useState({ start: "", end: "" })
    const handleCheckInOut = ({ startDate, endDate }) => {
        startDate = JSON.stringify(startDate)
        endDate = JSON.stringify(endDate)
        console.log(startDate)
        let start = startDate.split(" ").slice(0, 3).join(" ");
        let end = endDate.split(" ").slice(0, 3).join(" ");
        setCheckoutTime({ ...checkoutTime, start: start, end: end });
        setShowDatePicker(!showDatePicker)
    }
    return (
        <div>
            <input className={styles.input} type="text" onClick={() => setShowDatePicker(!showDatePicker)} />
            {/* <input type="text" onClick={() => setShowDatePicker(!showDatePicker)} /> */}
            {showDatePicker && <DateRange onOkClick={handleCheckInOut} />}
        </div>
    )
}

export default CheckInOut
