import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
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
        'summary': 'Approached 10 customers every week for 4 months to: identify potential customers,\n ' +
        'product features, test a series of unproven hypothesis about company’s business model, & how the product would scale into a successful company.\n'+
        'Assisted co-founder to develop a lean business plan to identify goals, target market, competition, & sales forecasts.',
        'title': 'Moving Elves',
    },

    {
        'title': 'PWM Fan',
        'summary': 'Physical audio spectrum analyzer based on FFT (Fast Fourier Transform).\n' +
        '6 PWM (pulse width modulated) fans pushed powdered Styrofoam pieces in the air in a transparent box. \n' +
        'The duty cycle of each fan was controlled by the respective frequency of the audio signal',
    },
    {
        'title': 'BlindHaptic',
        'summary': 'Developed a non-invasive system for blind people. The system consisted of three modules:\n' +
        '(1) Gesture controlled door unlock using MYO,\n' +
        '(2) Automated door guidance using speakers,\n' +
        '(3) Three ultrasonic sensors,\n' +
        'for continuous dynamic haptic feedback based on object distance by using 4 ultrasonic sensors mounted on the chest.',
    },
    {
        'title': 'cMoy Headphone Amplifier',
        'summary': 'First venture into developing a product to sell while I was studying at UCLA.\n' +
        'Designed & sold headphone 15 amplifiers, which incorporated dual OPA2134 OPAMP to amplify the audio signal.',
    },

]

class Startups extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div style={{whiteSpace: 'pre-line'}}>
                <Title title={'Startups'}>
                </Title>
                <div className={classes.root}>
                    <div className={classes.root}>
                        {
                            data.map(d => (
                                <ExpansionPanel>
                                    <ExpansionPanelSummary>
                                        <Typography className={classes.heading}>
                                            <span style={{fontWeight: 'bold'}}>{d.title}</span>
                                            <div>{d.summary}</div>
                                        </Typography> </ExpansionPanelSummary>

                                </ExpansionPanel>
                            ))

                        }


                    </div>

                </div>
            </div>





        )
    }
}

Startups.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Startups);
