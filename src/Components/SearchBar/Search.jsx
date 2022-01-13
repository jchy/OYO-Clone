import React from 'react'
import CheckInOut from './CheckInOut'
import InputPlace from './InputPlace'
import People from './People'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    height: '6vh',
                    width: '9vw',
                    backgroundColor: '#1ab64f',
                    '&:hover': {
                        background: "#1ab64f",
                    }
                },
            },
        },
    },
});


const Search = () => {
    return (
        <div style={{ backgroundColor: '#de273d', height: '24vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start' }}>
            <h1 style={{ color: 'white' }}>Over 157,000 hotels and homes across 35 countries</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InputPlace />
                <CheckInOut />
                <People />
                <ThemeProvider theme={theme}>
                    <Button variant="contained" >Search</Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Search
