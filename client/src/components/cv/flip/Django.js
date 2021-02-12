import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Grid, Card, CardActionArea, CardActions,
    CardContent, CardMedia, Button, Typography,
} from '@material-ui/core'
import ReactCardFlip from 'react-card-flip'
import Back from './DjangoBack'

const useStyles = makeStyles({
    mainContainer: {
        height: "100%"
    },
    cardContainer: {
        background: "#222",
        color: "#ddd",
        maxWidth: 600,
        margin: "5rem auto"
    }
})

const Mern_stack = (props) => {

    const classes = useStyles()

    const Default = () => (<></>)
    const Hover = () => (
        <>
            <Button size="small" style={{ color: "#4bb" }} onClick={props.OnClickOpen}>
                Download Resource Code
            </Button>
        </>
    )
    const [hoverCom, setHoverCom] = useState(<Default />)

    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick = () => { setIsFlipped(!isFlipped) }
    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.cardContainer} onMouseEnter={() => { setHoverCom(<Hover />) }}
                onMouseLeave={() => { setHoverCom(<Default />) }}>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <CardActionArea onClick={handleClick}>
                        <CardMedia style={{ height: "275px", backgroundColor: "tan", textAlign: "center", fontSize: "60px", padding: "100px" }}>
                            Django-react
                        </CardMedia>
                        <CardContent>
                            <Typography gutterButtom variant="h5">
                                Project2
                            </Typography>
                            <Typography variant="body2" component="p">
                                Key words: Python-Django-react, Athentication, Private Routes, MongoDB
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <Back onClick={handleClick} /> */}
                    <CardActionArea onClick={handleClick}>
                        <CardMedia style={{ height: "275px", backgroundColor: "tan", textAlign: "center", fontSize: "60px", padding: "100px" }}>
                            Django-react
                        </CardMedia>
                    </CardActionArea>
                </ReactCardFlip>
                <CardActions>
                    {hoverCom}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Mern_stack
