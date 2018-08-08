// This file is shared across the demos.

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import connect from "react-redux/es/connect/connect";
import {changeActiveMainCategory, changeActiveSubCategory} from "./actions/index";
import Link from "react-router-dom/es/Link";
import slug from 'slug'

const data = {
    'Web Apps': {
        'ReadIt!\n(AWS Serverless, React, Redux)': '',
        'My Books\n(React)': '',
        'AWS Metrics Dashboard\n(MEAN + Python)': '',
        'Customer Onboarding Wizard\n(React)': '',
        'This App ⭐️\n(React/Redux)': ''
    },
    'Technical Skills': '',
    'Professional Experience': {
        'Teradata': {
            '1': {
                'Title': '',
                'Summary': '',
                'Date': '',
                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
        'Alliacense': {
            '1': {
                'Title': '',
                'Summary': '',
                'Date': '',

                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },

        },

        'Startups': {
            '1': {
                'Title': '',
                'Summary': '',
                'Date': '',
                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
        'UCLA SEAS': {
            '1': {
                'Title': '',
                'Summary': '',
                'Date': '',

                'S': '',
                'T': '',
                'A': '',
                'R': '',
                'TU': '',
            },
        },
    },
    'Time Line': '',

    'Accomplishments': {
        '1st Prize Teradata\nAI Hackathon': '',
        '2nd Prize Teradata\nService Analytics Hackathon': '',
        '5th Position Teradata\nUI/UX Hackathon': '',
        'Patent Co-author\n(Invention Disclosure Report)': '',
        'AWS Certified Solution Architect': '',
        'Certified Scrum Master': ''
    },
    // 'Machine Learning/Finance': {
    //     '1': '',
    //     '2': '',
    //     '3': ''
    // },
    'Resume': '',


}
const misc = {
    'Education': '',
    // 'Books Read': '',
    'About Me': '',
    'Contact Info': ''

}
// const startUps = {
//     'Startups': {
//         '1': {
//             'Summary': '',
//             'S': '',
//             'T': '',
//             'A': '',
//             'R': '',
//             'TU': '',
//         },
//     }
// }
// const timeLine = {
//     'Time Line': {
//         'Work': '',
//         'Personal': ''
//     }
// }
// const booksRead = {
//     'Books': ''
// }
// const aboutMe = {
//     'About Me': ''
// }
// const contact = {
//     'Contact Me': ''
// }
// const webApps = {
//     'Web Apps': {
//         '1': '',
//         '2': '',
//         '3': ''
//     }
// }
// const resume = {
//     'Resume': '',
// }
//
//
// const accomplishments = {
//     'Accomplishments': {
//         '1': '',
//         '2': '',
//         '3': ''
//     }
//
// }
// const education = {
//     'Education': ''
// }
// const socialLinks = {
//     'Github': '',
//     'LinkedIn': ''
// }

const styles = theme => ({
    label: {

        alignItems: 'start',
        alignContent: 'start',
        justifyItems: 'start',
        justifyContent: 'start',
        textTransform: 'none',
        padding: '10px 0px 10px 10px',
        marginLeft: '-20px',
        marginTop: '-10px',
        fontSize: '0.95rem',


    },
    ep: {

        marginRight: '-50px',
        marginTop: '-5px',
        marginBottom: '-5px',
        marginLeft: '10px',
        transition: theme.transitions.create(['margin'], {duration: theme.transitions.duration.shortest}),
        '&:before': {
            position: 'absolute',
            left: 0,
            top: -1,
            right: 0,
            height: 1,
            content: '""',
            opacity: 1,
            backgroundColor: 'white',
            transition: theme.transitions.create(['opacity', 'background-color'], {duration: theme.transitions.duration.shortest}),
        },
    },
    mainep: {
        marginTop: '-10px',
        marginBottom: '-15px',
        marginRight: '-15px',
        justifyContent: 'start',
        justifyItems: 'start',
        alignContent: 'start',
        alignItems: 'start',
        textTransform: 'none',
        display: 'grid',
        gridTemplateRows: 'auto',
        gridTemplateColumns: 'auto',

    }

})


class NavData extends React.Component {
    state = {
        mainCategory: ''
    }
    onClickCategory = (item) => {
        this.setState({mainCategory: item})
    }

    render() {
        console.log("Active", this.state)
        const {classes} = this.props;

        const mailFolderListItems = Object.keys(data).map(d => (
            <ExpansionPanel elevation={'0'}
                            classes={{root: classes.ep}}>
                <ExpansionPanelSummary elevation={'0'}>


                    <Button fullWidth={'true'} component={Link} to={`/portfolio/${slug(d)}`}
                            onClick={() => this.onClickCategory(d)}
                            classes={{root: classes.label}}>
                        {
                            ((Object.keys(data[d]).length === 0) && (d === this.state.mainCategory))?
                                <Typography
                                    style={{'fontWeight': 'bold',color:'#4052AF'}}>
                                    {d}
                                </Typography>:
                                <Typography
                                    style={{'fontWeight': 'bold'}}>
                                    {d}
                                </Typography>

                        }



                    </Button>


                </ExpansionPanelSummary>
                {
                    Object.keys(data[d]).map(subItem => (
                        <ExpansionPanelDetails>

                            <Button
                                component={Link} selected={true} to={`/portfolio/${slug(d)}/${slug(subItem)}`}
                                size="small" fullWidth={'true'} classes={{root: classes.mainep}}
                                onClick={() => this.onClickCategory(subItem)}>
                                {
                                    (subItem === this.state.mainCategory) ?
                                        <div style={{color:'#4052AF'}}>
                                            {subItem}
                                        </div>
                                        :
                                        <div>
                                            {subItem}
                                        </div>
                                }

                            </Button>

                        </ExpansionPanelDetails>
                    ))
                }
            </ExpansionPanel>
        ))
        const miscItems = Object.keys(misc).map(d => (
            <ExpansionPanel elevation={'0'} classes={{root: classes.ep}}>
                <ExpansionPanelSummary elevation={'0'}>
                    <Button component={Link} to={`/portfolio/${slug(d)}`} fullWidth={'true'}
                            onClick={() => this.onClickCategory(d)}
                            classes={{root: classes.label}}>
                        {
                            (d === this.state.mainCategory)?
                                <Typography
                                    style={{'fontWeight': 'bold',color:'#4052AF'}}>
                                    {d}
                                </Typography>:
                                <Typography
                                    style={{'fontWeight': 'bold'}}>
                                    {d}
                                </Typography>

                        }
                    </Button>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        ))
        return (
            <div>
                <div style={{marginBottom: '5px',whiteSpace:'pre'}}>
                    {mailFolderListItems}
                </div>
                <Divider/>
                <div style={{marginTop: '5px'}}>
                    {miscItems}
                </div>

            </div>
        )
    }
}

NavData.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {


    return {
        activeMainCategory: state.activeMainCategory,
        activeSubCategory: state.activeSubCategory

    }
}

const mapDispatchToProps = (dispatch) => ({

    changeActiveMainCategory: (mainCategory) => dispatch(changeActiveMainCategory(mainCategory)),
    changeActiveSubCategory: (subCategory) => dispatch(changeActiveSubCategory(subCategory))

})
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavData));
