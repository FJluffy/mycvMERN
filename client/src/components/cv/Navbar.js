import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobliRightMenuSlider from "@material-ui/core/Drawer"
import {
    AppBar, Toolbar, ListItem, IconButton, ListItemText,
    ListItemIcon, Avatar, Divider, List, Typography, Box
} from "@material-ui/core"
import {
    ArrowBack, AssignmentInd, Home, Apps,
    ContactMail
} from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles'
import Logo from "../../images/logo.png"
import Footer from './Footer'
import ToHub from '../ToHub'

//css styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/hub/cv"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/hub/cv/resume"
    },
    {
        listIcon: <Apps />,
        listText: "portfolio",
        listPath: "/hub/cv/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/hub/cv/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({ right: false })

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open })
    }

    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.menuSliderContainer} component="div"
            onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={Logo} alt="Jayden" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )
    return (
        <>

            <Box component="nav">
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>
                            Portfolio
                        </Typography>
                        {/* <ToHub /> */}
                        <MobliRightMenuSlider anchor="right" open={state.right}
                            onClose={toggleSlider("right", false)}>
                            {sideList("right")}
                            <Footer />
                        </MobliRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar
