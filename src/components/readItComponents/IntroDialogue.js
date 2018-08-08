import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
const styles = {
    card: {
        maxWidth: 800
        ,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
};
class IntroDialogue extends React.Component {
    state = {
        open: true,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };


    render() {
        const { classes } = this.props;

        return (


                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <Card className={classes.card}>


                                    {
                                        this.props.image ?  <a href={this.props.image}>
                                            <CardMedia
                                                className={classes.media}
                                                image={this.props.image}
                                                title="ReadIt Architecture"
                                            >
                                            </CardMedia>
                                        </a>:
                                            null
                                    }



                                <Divider/>
                                <CardContent>

                            <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                            <DialogContent>
                                <DialogContentText style={{whiteSpace:'pre'}} id="alert-dialog-description">
                                    {this.props.content}
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>

                                <Button onClick={this.handleClose} color="primary" autoFocus>
                                    Continue
                                </Button>
                            </DialogActions>
                                </CardContent>
                            </Card>
                        </Dialog>

        );
    }
}

IntroDialogue.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroDialogue);
