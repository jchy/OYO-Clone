import React from 'react'
import Search from './Search'

const HomeSearch = () => {
    return (
        <>
            <div style={{ backgroundColor: '#de273d', height: '24vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
                <h1 style={{ color: 'white' }}>Over 157,000 hotels and homes across 35 countries</h1>
                <Search />
            </div>
            <ul style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <li>
                    <h1 style={{ color: 'red' }}>Use this params from below to check</h1>
                </li>
                <li>
                    <h2> "/search" -- for only search component</h2>
                </li>
                <li>
                    <h2> "/payment/id" -- for checkout page :- give id a number</h2>
                </li>
            </ul>

        </>
    )
}

export default HomeSearch
