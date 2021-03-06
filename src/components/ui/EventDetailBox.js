import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Category from './Category';
import EventInventoryTable from './EventInventoryTable';
import {inventoryCategories} from '../../assets/data/taxonomies';
import RenderOrEdit from '../ui/RenderOrEdit'

const styles = theme => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    background: '#2b3038'
  },
  paper2: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    float: 'right',
    marginBottom: 20,
  },
});

class EventDetailBox extends React.Component{

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, section, sectionName, eventDoc } = this.props;
    return (
      <div>
        <Typography variant="display1" style={{textTransform:'capitalize', display: 'inline-block'}} gutterBottom>
          {sectionName}
        </Typography>
        {
          inventoryCategories[sectionName]
          ? <Button variant='raised' color='secondary' className={classes.button} onClick={this.handleOpen}>Reserve {sectionName} equipment</Button>
          : null
        }
        {
          inventoryCategories[sectionName]
          ? <EventInventoryTable eventDoc={eventDoc} category={sectionName}/>
          : null
        }

        <Modal
          aria-labelledby="simple-modal-title"
          open={this.state.open}
          onClose={this.handleClose}
          className={classes.root}
        >
          <div className={classes.paper2}>
            <Typography variant="title" id="modal-title" gutterBottom>
              Pull Form
            </Typography>
            <Category picker eventDoc={eventDoc} category={sectionName} types={inventoryCategories[sectionName]}/>
          </div>
        </Modal>
          {sectionName !== 'production'
          ?<Typography variant="headline" gutterBottom>Notes</Typography>
          : null}
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            {Object.keys(section).map((fieldName, i) =>
            <Grid key={i} item xs={12} sm={6}>
              <RenderOrEdit eventDoc={eventDoc} section={sectionName} field={fieldName} type='text'/>
            </Grid>)}
          </Grid>
        </Paper>
      </div>
    );
  }
}


EventDetailBox.propTypes = {
  section: PropTypes.object,
  eventDoc: PropTypes.any,
  sectionName: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(EventDetailBox);
