import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>

      <p>
          For any inquiries regarding my work, please send me an{" "}
          <a href="mailto:ami619847@gmail.com?subject=Mail%20from%20the%20website">
            email
          </a>
          .
      </p>
    
      <form action="mailto:ami619847@gmail.com" method="post" enctype="text/plain">
        <TextField
          label="Name"
          id="margin-none"
          placeholder="Your name"
          className={classes.textField}
        />
        <TextField
          label="Email"
          id="margin-none"
          placeholder="Your email"
          className={classes.textField}
        />
        <br />
        <TextField
          id="standard-full-width"
          label="Message"
          style={{ margin: 8 }}
          placeholder="Your message"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          type="submit" 
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<RestoreIcon />}
          type="reset"
        >
          Reset
        </Button>
      </form>
      </div>
    </div>
  );
}
