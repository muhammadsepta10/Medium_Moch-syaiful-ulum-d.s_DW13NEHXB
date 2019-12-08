import React from 'react';
import { Modal, Grid, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Back from './back.png';
import Back2 from './back2.png';



const useStyles = makeStyles(theme => ({
  root: {
    height: 660,
    flexGrow: 1,
    transform: 'translateZ(0)',
    // The position fixed scoping doesn't work in IE 11.
    // Disable this demo to preserve the others.
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: 850,
    height: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: 10,
  },
  back: {
    backgroundImage: `url(${Back})`,
    backgroundRepeat: 'no-repeat',
  },
  back2: {
    backgroundImage: `url(${Back2})`,
    backgroundRepeat: 'no-repeat'

  },
  grid: {
    height: 400
  },
  gridc: {
    textAlign: 'center'
  },
  tex: {
    textAlign: 'center',
    fontSize: 15,
    color: '3D3D3D',
    width: 400
  },
  txh: {
    fontSize: 31
  },
  form: {
    display: 'flex',
    flexDirection: 'column',


  },
  field: {
    width: 350,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10

  }

}));

function App() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);
  const rootRef = React.useRef(null);

  return (
    <div className={classes.root} ref={rootRef}>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
        <div className={classes.paper}>
          <Grid className={classes.grid} container sm={12}>
            <Grid className={classes.back} item sm={3}>

            </Grid>
            <Grid item sm={6}>
              <div className={classes.gridc}>
                <h1 className={classes.txh}>Join Medium.</h1>
                <p className={classes.tex}>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topic your love.</p>
              </div>
              <div>
                <form className={classes.form}>
                  <TextField type='text' className={classes.field} label="Username" />
                  <TextField type='email' className={classes.field} label="Email" />
                  <TextField type='password' className={classes.field} label="Password" />
                  <Button style={{ marginTop: 20, width: 200, marginRight: 'auto', marginLeft: 'auto' }} variant="contained" color="dark" href="#contained-buttons">
                    Registration
                  </Button>
                  <p className={classes.tex} style={{ fontWeight: 'bold' }}>
                    Alredy Have an Acount? <a href='#conter' style={{ textDecoration: 'none' }}>Sign in</a>
                  </p>
                  <p className={classes.tex} style={{ marginTop: -10 }}>
                    To make Medium work, we log user data and share it with service providers. "Sign Up" above to accept Medium's <a href='#' style={{ color: 'black' }}>Terms of Services</a> and <a style={{ color: 'black' }} href='#'>Privacy Policy.</a>
                  </p>
                </form>
              </div>
            </Grid>
            <Grid className={classes.back2} item sm={3}>

            </Grid>
          </Grid>
        </div>
      </Modal>
    </div >
  );
}

export default App;
