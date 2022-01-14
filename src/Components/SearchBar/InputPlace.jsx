import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCityName } from '../../redux/Search/action'

const InputPlace = () => {
    const [val, setVal] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(searchCityName({ val }))
        // eslint-disable-next-line
    }, [val])
    return (
        <div>
            <input value={val} onChange={(e) => { setVal(e.target.value) }} style={{ height: '5vh', width: '17vw', fontSize: 'large', fontWeight: 'bold' }} type="text" />
        </div>
    )
}

export default InputPlace
