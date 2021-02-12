import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'
import Navbar from './Navbar'
import './background.css'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#333"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 3rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Box component="header" className={classes.mainContainer} >
                <Typography variant="h4" align="center" className={classes.heading}>
                    Experiences
                </Typography>
                <Box component="div" className={classes.timeLine}>

                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2011</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            HONOURS BACHELOR OF COMPUTER SCIENCE
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            University of Tianjin Polytechnic
                            </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Key courses: Advaned Mathematics, Data Structure, Data Mining, Compile Theory, Algorithm, Web Design.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015</Typography>
                    {/* end of a new experience */}

                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015/03</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Linux/ JAVA(Internship)
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Neusoft
                            </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            •	Participate in learning JAVA language development.<br />
                        •	Learn Linux Operating System.<br />
                        •	Practice spring boot as backend developer.

                            </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015/06</Typography>
                    {/* end of a new experience */}
                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2015/07</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Back End Developer
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Neusoft
                            </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            •	Develop and deploy based on Spring boot framework.<br />
                        •	Connect Database by JDBC, MySQL.<br />
                        •	Deploy and achieve CRUD by Hibernate, H2 and JPA.<br />
                        •	Implement data structure comprehendingly with a team to
                        reduce complexities and memory usage by 12% and 9% respectively,
                         change framework to speed up responding time. <br />
                        •	Participate in converting monolith architecture to microservice
                         to guarantee 100% running time and maintenance flexible. <br />
                        •	Achieve load-balancing, high-availability by running several services in different ports.<br />
                        •	Achieve authentication token and data communication in between
                         Rest-api of services and dividable development.<br />
                        •	Design and utilize verification code and pattern to avoid malicious
                         attack and robotic behavior.
                            </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017/06</Typography>
                    {/* end of a new experience */}
                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2017/07</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Web Frontend Development
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Seasun Inc.
                            </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            •	Related skills: Html5, CSS3, Javascript, React, Redux, Redux-Form,
                        Bootstrap, Python, TypeScript, NodeJS, MySQL<br />
                        •	Re-build web application utilizing React framework instead of previous JS/CSS/HTML.<br />
                        •	Design, explore and modify useful dependencies to present components and visual effects.<br />
                        •	Creating an selling platform of gaming-accounts by using React, React-Redux,
                         Redux-Form, with (Express + NodeJS) as REST API backend to talk to the database (MySQL) <br />
                        •	Optimizing UI components by using Bootstrap, React-Bootstrap, and jQuery<br />
                        •	Worked with a team to build a consumer-facing platform<br />
                        •	Added and deployed request filter and data exposure limits against malicious
                        attacks and data exploration.<br />
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018/12</Typography>
                    {/* end of a new experience */}
                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019/01</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            MAJOR OF SOFTWARE ENGINEERING
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Centennial College
                            </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Key course: C#, Java, MVC framework, SQL database, Scrum Agile Methodology, Javascript, css, html.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019/08</Typography>
                    {/* end of a new experience */}
                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019/09</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            HONOURS MASTER OF COMPUTER ENGINEERING
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>
                            Ryerson University
                            </Typography>
                        <Typography variant="subtitle1" align="center" style={{ color: "tan" }}>
                            Key courses: Encryption/Hash Algorithm and Mechanism, IP/TCP/UDP Protocol,
                            Network Architecture, Network Security, Linux operation system, Cloud Computing.
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020/08</Typography>
                    {/* end of a new experience */}
                    {/* start of a  new experience */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2020/09</Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            Full Stack Developer
                            </Typography>
                        <Typography variant="body1" align="center" style={{ color: "tomato" }}>

                        </Typography>
                        <Typography variant="subtitle1" align="left" style={{ color: "tan" }}>
                            •	In charge of backend and frontend development on my own for small companies and individuals.<br />
                            •	Use Java Spring boot framework, Nodejs Express and Python Django as backend.<br />
                            •	Use Javascript and Reactjs as frontend.<br />
                            •	Utilize Eclipse, Visual Studio Code, AWS, Docker, Photoshop as mainly applications and tools.<br />
                            •	Utilize Bootstrap, Stack Overflow, Github as primary online resources<br />
                            •	Utilize MySQL and MongoDB as Database.<br />
                            •	Deploy project following Microservice manner.<br />
                            •	Oauth, JWT etc. as authentication measure.

                        </Typography>
                    </Box>
                    {/* end of a new experience */}
                </Box>
            </Box>
        </>
    )
}

export default Resume
