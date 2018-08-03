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
       padding:'10px'



    },
});
const data = [
    {
      'summary':'Manage & develop company’s machine vision & algorithmic trading intellectual property.'
    },
    {
        'summary':'Generated millions of dollars in licensing revenue by providing evidence of use against target companies in the: machine vision, pattern recognition, edge detection and algorithmic trading industries.'

    },
    {
        'summary':'Collaborate with the patent attorney & inventors in patent prosecution/litigation by analyzing patent claims & file wrappers.'
    },
    {
        'summary':'Report key findings of portfolio/IP valuation to the Licensing Manager for target company’s royalty rate assessment.',
    },
    {
        'summary':'Participated in licensing negotiation deals with the C-level executives of licensing clients.',
    },
    {
        'summary':'Disseminate key findings by writing technical responses & presentations to patent attorneys, inventors, & potential clients.',
    },
    {
        'summary':'Developed a tool to reduce patent classification workflow. The tool uses Linear Support Vector Machine (LSVM) for classification & Latent Semantic Analysis (LSA), Mutual Information & Frequency Count for preprocessing. F1 score of 0.94 & accuracy score: 0.98.',
    },
    {
        'summary':'Developed a tool to reduce patent infringement workflow. The tool (1) Clusters thousands of documents in our database & predict potential infringing companies, & (2) Extracts relevant information associated with patents, from the file wrapper.',
    },
        ]

class Alliacense extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div>
              <Title title={'Alliacense'}>
                <Typography style={{fontSize:'22px'}} variant={'display1'}>
                  Intellectual Property Analyst Engineer
                </Typography>
                <Typography style={{fontSize:'16px'}} variant={'display1'}>
                  Sep 2015 - Nov 2016
                </Typography>
              </Title>
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






        )
    }
}

Alliacense.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Alliacense);
