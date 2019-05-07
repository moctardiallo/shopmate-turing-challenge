import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Grid,
  withStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";

const theme = createMuiTheme({});

const styles = {
  createAccount: {
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff"
  },
  createAccountContainer: {
    paddingLeft: "0px"
  },

  login: {
    color: "#00fbff"
  },
  password: {
    paddingRight: "5px"
  },
  confirmPassword: {
    paddingLeft: "5px"
  }
};

function Register(props) {
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
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>All fields are required*</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name *"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email *"
            type="email"
            fullWidth
          />
          <Grid container>
            <Grid item sm={6}>
              <div className={classes.password}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item sm={6}>
              <div className={classes.confirmPassword}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Confirm your Password *"
                  type="password"
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <MuiThemeProvider theme={theme}>
            <div className={classes.createAccountContainer}>
              <Button onClick={handleClose} className={classes.createAccount}>
                create an account
              </Button>
            </div>
          </MuiThemeProvider>
        </DialogActions>
        <div style={{ padding: "25px" }}>
          Allready have an account?{" "}
          <Button size="small" className={classes.login}>
            Login
          </Button>
        </div>
      </Dialog>
    </span>
  );
}

export default withStyles(styles)(Register);
