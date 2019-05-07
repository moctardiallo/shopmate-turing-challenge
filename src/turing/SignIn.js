import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

const theme = createMuiTheme({});

const styles = {
  signIn: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff"
  },
  signInContainer: {
    paddingLeft: "0px"
  },

  register: {
    color: "#00fbff"
  }
};

function SignIn(props) {
  const [open, setOpen] = React.useState(false);
  const { classes } = props;

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <span>
      <Button mini color="secondary" size="small" onClick={handleClickOpen}>
        SignIn
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">SignIn</DialogTitle>
        <DialogContent>
          <DialogContentText>All fields are required*</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email *"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password *"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <MuiThemeProvider theme={theme}>
            <div className={classes.signInContainer}>
              <Button onClick={handleClose} className={classes.signIn}>
                Sign In
              </Button>
            </div>
          </MuiThemeProvider>
        </DialogActions>
        <div style={{ padding: "25px" }}>
          Don't have an account?{" "}
          <Button size="small" className={classes.register}>
            Register
          </Button>
        </div>
      </Dialog>
    </span>
  );
}

export default withStyles(styles)(SignIn);
