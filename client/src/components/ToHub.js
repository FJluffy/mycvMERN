import React from 'react'
import { Grid, Button } from '@material-ui/core'

const ToHub = () => {
    return (
        <>
            <Grid container justify="flex-end"><Button style={{ color: "tan", borderColor: "tan" }} href='/hub' >
                Hub</Button></Grid>
        </>
    )
}

export default ToHub
