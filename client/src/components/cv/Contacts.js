import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core"
import Alert from '@material-ui/lab/Alert';
import SendIcon from "@material-ui/icons/Send"
import Axios from 'axios'
import Navbar from './Navbar'

const useStyles = makeStyles(theme => ({
    form: {
        top: "50%",
        left: "50%",
        transform: "Translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "tomato",

        },
        "& label": {
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset": {
                borderColor: "tan",
            },
            "& .Mui-focused fieldset": {
                borderColor: "tan",
            }
        }
    }
})(TextField)


const Contacts = () => {
    const [emailForm, setEmailForm] = useState({ name: "", email: "", message: "" });

    const classes = useStyles()
    const handleChange = (e) => {
        setEmailForm({ ...emailForm, [e.target.name]: e.target.value });

    }

    const Default = () => (<></>)
    const [alert, setAlert] = useState(<Default />)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (emailForm.name && emailForm.email && emailForm.message) {
            console.log(event.target);
            console.log(emailForm);

            Axios.post('http://localhost:3030/email/add', emailForm)
                .then(res => {
                    if (res.data.errcode) { setAlert(<Alert severity="error">Some error happened, please send email again</Alert>) }
                    else { setAlert(<Alert severity="success">Your Email Details Sent Successfully</Alert>) }
                })
                .catch(err => {
                    console.log(err);
                })
        }
        else { setAlert(<Alert severity="error">all fields should be non-empty, please send email again</Alert>) }

    }

    return (
        <Box component="div" style={{ height: "100vh" }}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" onSubmit={handleSubmit} className={classes.form}>
                    <Typography style={{ color: "tomato", textAlign: "center", textTransform: "uppercase" }} variant="h5">
                        Contact Me Without Hesitation
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" onChange={handleChange} name="name"
                        value={emailForm.name} inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
                    <br />
                    <InputField fullWidth={true} label="Email" variant="outlined" onChange={handleChange} name="email"
                        value={emailForm.email} inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
                    <br />
                    <InputField fullWidth={true} label="Message" variant="outlined" onChange={handleChange} name="message"
                        value={emailForm.message} inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
                    <br />
                    <Button className={classes.button} type="submit" variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        contact me
                        </Button>
                </Box>
            </Grid>
            {alert}
        </Box>
    )
}

export default Contacts
