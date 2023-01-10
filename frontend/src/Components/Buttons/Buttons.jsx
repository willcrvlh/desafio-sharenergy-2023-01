import React from 'react'
import Button from '@mui/material/Button';
function Buttons({text}) {
    return (
        <div>
            <Button variant="contained">{text}</Button>
        </div>
    )
}

export default Buttons