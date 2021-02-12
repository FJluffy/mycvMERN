import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import Navbar from './Navbar'
import { mergeClasses } from '@material-ui/styles'
import Popup from '../Popup'
import Mern_stack from './flip/Mern_stack'
import Djaongo from './flip/Django'
import Jsp from './flip/Jsp'
import Python_crawl from './flip/Python_crawl'
import Microservice from './flip/Microservice'

const Portfolio = () => {
    const [popup, setPopup] = useState(false)
    const OnClickOpen = () => {
        setPopup(true)
    }
    const OnClickClose = () => {
        setPopup(false)
    }

    return (
        <>
            <Popup popup={popup} close={OnClickClose} />
            <Box component="div" className={mergeClasses.mainContainer}>
                <Navbar />
                <Grid container justify="center">
                    {/* start one project */}
                    <Mern_stack OnClickOpen={OnClickOpen} />
                    {/* end one project */}

                    {/* start one project */}
                    <Microservice OnClickOpen={OnClickOpen} />
                    {/* end one project */}

                    {/* start one project */}
                    <Jsp OnClickOpen={OnClickOpen} />
                    {/* end one project */}

                    {/* start one project */}
                    <Python_crawl OnClickOpen={OnClickOpen} />
                    {/* end one project */}

                    {/* start one project */}
                    <Djaongo OnClickOpen={OnClickOpen} />
                    {/* end one project */}
                </Grid>
            </Box>
        </>
    )
}

export default Portfolio