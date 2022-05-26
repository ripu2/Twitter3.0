import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMoralis } from 'react-moralis';

interface DialogProps {
    open: boolean,
    onClose: Function
}

export default function DialogBox(props: DialogProps) {

	const { Moralis } = useMoralis()

  const logout = async () => {
    const res = await Moralis.User.logOut()
    if(res) window.location.reload()
  }

  const handleClose = () => {
    props.onClose()
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
				style={{backgroundColor: '#15202b'}}
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to logout ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Any unsaved progress will be lost
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{textTransform: 'none'}} onClick={handleClose}>Cancel</Button>
          <Button style={{textTransform: 'none'}} onClick={logout} autoFocus>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
