import { Button } from '@mui/material'
import React, { useState } from 'react'
import style from './People.module.css'
import TotalPerson from './TotalPerson'

const People = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [rooms, setRooms] = useState(1)
    const [totalPeople, setTotalPeople] = useState(1)
    let arr = Array.from(Array(rooms).keys());
    let styleobj = {
        display: isDisplay ? 'block' : 'none',
        position: 'absolute',
        backgroundColor: "white",
        boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.23)",
        height: 'auto',
        width: '17vw',
    }
    const handleClickShow = (val) => {
        setTotalPeople(prev => prev + val)
    }
    return (
        <div>
            <input onChange={(e) => console.log(e.target.value)} value={`${rooms}Room, ${totalPeople}Guests`} className={style.input} type="text" onClick={() => setIsDisplay(!isDisplay)} />
            {/* <input onClick={() => setIsDisplay(!isDisplay)} type="text" /> */}
            <div style={styleobj} className={style.addPerson}>
                <div className={style.flex_direction}>
                    <h4>Rooms</h4>
                    <h4>Guests</h4>
                </div>
                <div >
                    {arr.map(item => (<TotalPerson handleClickShow={handleClickShow} roomNo={Number(item) + 1} />))}
                </div>
                <div className={style.flex_direction}>
                    <Button disabled={rooms <= 1} onClick={() => { setTotalPeople(prev => prev - 1); setRooms(rooms - 1) }}>delete room</Button>
                    <Button onClick={() => { setTotalPeople(prev => prev + 1); setRooms(rooms + 1) }}>add room</Button>
                </div>
            </div>
        </div >
    )
}

export default People
