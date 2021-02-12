import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box, Grid, Card, CardActionArea, CardMedia, Button
} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import Footer from '../Footer'
import Web from '../../images/web.png'
import Popup from '../Popup'
import Android from '../../images/android.jpg'
import BG from '../../images/bg.jpg'


const useStyles = makeStyles({
    mainContainer: {
        position: "relative"
    },
    cardContainer: {
        maxWidth: 1000,
        margin: "5rem auto"
    }
})

const Exhibition_home = () => {
    const classes = useStyles()
    const [popup, setPopup] = useState(false)
    const OnClickOpen = () => {
        setPopup(true)
    }
    const OnClickClose = () => {
        setPopup(false)
    }

    return (
        <div backgroundImage={BG}>
            <div style={{ backgroundColor: "#222", position: "fixed", width: "100%" }} >
                <Grid container justify="flex-end"><Button style={{ color: "tan", borderColor: "tan", margin: '10px' }}
                    href='/cv/contacts' >Contact Me</Button>
                    <Button style={{ color: "tan", borderColor: "tan", margin: '10px' }} href='/' >
                        Hub</Button></Grid>
            </div>
            <Box component="div">
                <Grid container justify="center" className={mergeClasses.mainContainer}>
                    {/* start one project */}
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer} onClick={OnClickOpen}>
                            <CardActionArea /* href='/exhibition/web' */>
                                <CardMedia component="img" alt="Web Demo"
                                    height="550" image={Web} />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* end one project */}
                    <Grid item xs={12}>
                        <Card className={classes.cardContainer} onClick={OnClickOpen}>
                            <CardActionArea /* href='/exhibition/android' */>
                                <CardMedia component="img" alt="Android App"
                                    height="550" image={Android} />
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <Popup popup={popup} close={OnClickClose} />
            <div style={{ position: "fixed", bottom: "0px", width: "100%", backgroundColor: "#eee", color: "#233" }}><Footer /></div>
        </div>
    )
}

export default Exhibition_home