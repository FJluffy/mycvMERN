import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Popup = (props) => {

    const [password, setPassword] = useState("");
    const handleChange = (e) => {
        setPassword(e.target.value);

    }

    const onSubmit = () => {

    }

    return (
        <Dialog open={props.popup} onClose={props.close} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Authentication</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    You need to authenticate firstly
          </DialogContentText>
                <TextField onChange={handleChange}
                    autoFocus
                    margin="dense"
                    name="password"
                    value={password}
                    type="password"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.close} color="primary">
                    Cancel
          </Button>
                <Button onClick={onSubmit} color="primary">
                    Submit
          </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Popup;
