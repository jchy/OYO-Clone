import React, { useState } from 'react'

const InputPlace = () => {
    const [val, setVal] = useState("")
    return (
        <div>
            <input value={val} onChange={(e) => setVal(e.target.value)} style={{ height: '5vh', width: '17vw' }} type="text" />
        </div>
    )
}

export default InputPlace
