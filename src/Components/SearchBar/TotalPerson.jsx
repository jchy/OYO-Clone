import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const TotalPerson = ({ roomNo, handleClickShow }) => {
    const [personPerRoom, setPersonPerRoom] = useState(1)
    const handleClick = (val) => {
        handleClickShow(val)
        setPersonPerRoom(prev => prev + val)

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div>
                Room{roomNo}
            </div>
            <div>
                <IconButton color="success" disabled={personPerRoom <= 1} onClick={() => handleClick(-1)}><RemoveCircleIcon /></IconButton>
                {personPerRoom}
                <IconButton color="success" disabled={personPerRoom >= 3} onClick={() => handleClick(1)}><AddCircleOutlineIcon /></IconButton>
            </div>
        </div>
    )
}

export default TotalPerson
