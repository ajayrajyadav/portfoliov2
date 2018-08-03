import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import PictureSwiper from "./PictureSwiper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Title from "./Title";


const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});
const data = [
    {
        'summary':'Managed five engineering computer labs comprising of 200+ computers, monitoring lab usage, updating &\n' +
        'troubleshooting: software, hardware, & networking issues.',
    }
]
class Seas extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
                <Title title={'SEAS UCLA'}>
                    <Typography style={{fontSize:'22px'}} variant={'display1'}>
                        Lab consultant
                    </Typography>
                    <Typography style={{fontSize:'16px'}} variant={'display1'}>
                        Mar 2014 - Jun 2015
                    </Typography>
                </Title>
            <div className={classes.root}>
                <div className={classes.root}>
                    {
                        data.map(d=>(
                            <ExpansionPanel>
                                <ExpansionPanelSummary>
                                    <Typography className={classes.heading}>{d.summary}</Typography>
                                </ExpansionPanelSummary>

                            </ExpansionPanel>
                        ))

                    }


                </div>

            </div>
            </div>





        )
    }
}

Seas.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Seas);
