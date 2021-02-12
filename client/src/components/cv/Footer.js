import React from 'react'
import { makeStyles } from "@material-ui/styles"
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core"
import Github from '@material-ui/icons/GitHub'
import Twitter from '@material-ui/icons/Twitter'
import LinkedIN from '@material-ui/icons/LinkedIn'

const useStyle = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "tan",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
})

const Footer = () => {
    const clickLinkedIn = () => {
        window.open('https://www.linkedin.com/in/jayden-chen-41779a1b4/')
    }
    const clickFacebook = () => {
        window.open('https://github.com/FJluffy')
    }
    const clickTwitter = () => {
        window.open('https://twitter.com/jayden99584080')
    }
    const classes = useStyle()
    return (
        <BottomNavigation width="auto" style={{ background: "#222" }}>
            <BottomNavigationAction className={classes.root} onClick={clickLinkedIn} style={{ padding: 0 }} icon={<LinkedIN />} />
            <BottomNavigationAction className={classes.root} onClick={clickFacebook} style={{ padding: 0 }} icon={<Github />} />
            <BottomNavigationAction className={classes.root} onClick={clickTwitter} style={{ padding: 0 }} icon={<Twitter />} />

        </BottomNavigation>
    )
}

export default Footer
