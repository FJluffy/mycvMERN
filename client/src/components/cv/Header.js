import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Avatar, Grid, Box } from '@material-ui/core'
import Typed from 'react-typed'
import Logo from "../../images/logo.png"

//css styles
const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={Logo} alt="Jayden" />
            </Grid>

            <Typography className={classes.title} variant="h4">
                <Typed strings={["Jayden Chen"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["programmer", "Web Developer", "Master of Engineering"]}
                    typeSpeed={30} backSpeed={60} loop />
            </Typography>
            <Typography variant="h6" style={{ color: "tan", margin: "15px" }}>
                <Typed strings={["PROGRAMMING: JAVA, Python, NodeJS\
                , C#, HTML/CSS/Javascript(react js)"]} typeSpeed={30} />
            </Typography>
            <Typography variant="h6" style={{ color: "tan", margin: "15px" }}>
                <Typed strings={["Front-end: React/Redux, Javascript, CSS, HTML, Typescript"]} typeSpeed={30} />
            </Typography>
            <Typography variant="h6" style={{ color: "tan", margin: "15px" }}>
                <Typed strings={["OTHERS: Encrytion/Hash Algorithm, Data Structure, SQL(mySQL)/noSQL (MongoDB), Microservices"]} typeSpeed={30} />
            </Typography>
            <Typography variant="h6" style={{ color: "tan", margin: "15px" }}>
                <Typed strings={["Devtools: Linux/Windows, Cloud Computing, ASW/Azure, Photoshop, Eclipse/Visual Studio Code/Docker"]} typeSpeed={30} />
            </Typography>
        </Box>
    )
}

export default Header
