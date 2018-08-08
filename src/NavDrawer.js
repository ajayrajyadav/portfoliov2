import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import NavData from './NavData';
import Teradata from "./components/Teradata";
import {Route} from 'react-router-dom'
import {Auth} from "aws-amplify";
import * as slug from "slug";
import connect from "react-redux/es/connect/connect";
import TimeLineWork from "./components/TimeLineWork";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Resume from "./components/Resume";
import Jupyterr from "./components/Jupyterr";
import Accomplishments from "./components/Accomplishments";
import Startups from "./components/Startups";
import Alliacense from "./components/Alliacense";
import AwsMetrics from "./components/AwsMetrics";
// import BooksApp from "./components/MyReads/BooksApp";
import CustomerOnboarding from "./components/CustomerOnboarding";
import TechnicalSkills from "./components/TechnicalSkills";
import {changeActiveSubCategory, getNavbarData} from "./actions/index";
import AiHackathon from "./components/AiHackathon";
import ServiceAnalyticsHackathon from "./components/ServiceAnalyticsHackathon";
import UiHackathon from "./components/UiHackathon";
import Patent from "./components/Patent";
import AwsCsa from "./components/AwsCsa";
import Csm from "./components/Csm";
import Category from "./components/readItComponents/Category/Category";
import Post from "./components/readItComponents/Posts/Post/Post";
import PostSummary1 from "./components/readItComponents/PostDisplay/PostSummary/PostSummar1";
import {addAuthUser} from "./actions/readitActions/authAction";
import './App.css'
import SignIn from "./components/readItComponents/auth/SignIn/SignIn";
import SignUp from "./components/readItComponents/auth/SignUp/SignUp";
import {Verification} from "./components/readItComponents/auth/Verification/Verification";
import Paper from "@material-ui/core/Paper";
import BooksRead from "./components/BooksRead";
import BooksApp from "./components/MyReads/BooksApp";
import Seas from "./components/Seas";
import ContactInfo from "./components/ContactInfo";
import ThisApp from "./components/ThisApp";


const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            paddingTop: theme.spacing.unit * 1,
            paddingRight: theme.spacing.unit * 2,
            paddingBottom: theme.spacing.unit * 2,
            paddingLeft: theme.spacing.unit * 2,
            overflow: 'scroll'        },
        [theme.breakpoints.up('xs')]: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding:theme.spacing.unit,
            overflow: 'scroll'        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            paddingTop: theme.spacing.unit * 1,
            paddingRight: theme.spacing.unit * 15,
            paddingBottom: theme.spacing.unit * 15,
            paddingLeft: theme.spacing.unit * 15,
            overflow: 'scroll'        },


    },

});

class NavDrawer extends React.Component {
    state = {
        mobileOpen: false,
        activeSubCategory: '',
        navbarData: ''
    };

    handleDrawerToggle = () => {
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };


    async componentDidMount() {
        this.props.history.push('/portfolio/About-Me')
        this.props.getNavbarData()


        const session = await Auth.currentSession()
        console.log("sessions is")
        console.log(session)
        this.props.addAuthUser(session.idToken.payload['cognito:username'])
    }


    render() {
        const {classes, theme} = this.props;
        console.log("~~~~~~~RENDERRRR~~~~~~`", this.props.activeMainCategory, this.props.activeSubCategory)
        console.log("navbard data ^^^^^", this.props.navbarData)


        const drawer = (
            <div>

                <div className={classes.toolbar}/>

                <Divider/>
                <List>
                    <NavData/>
                </List>
                {/*<List>{otherMailFolderListItems}</List>*/}
            </div>
        );
        return (

            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle}
                                    className={classes.navIconHide}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography style={{marginTop: '10px', marginBottom: '10px', fontSize: '25px'}} variant="title"
                                    color="inherit" noWrap>
                            Karan Sagoo
                            <span style={{
                                marginLeft: '4px',
                                marginTop: '2px',
                                color: 'white',
                                fontStyle: 'oblique',
                                fontSize: '10px'
                            }}>
                                {`Full Stack Software Engineer, AWS CSA, Agile CSM`} {}
                            </span>

                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
                    <Drawer variant="temporary" anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={this.state.mobileOpen} onClose={this.handleDrawerToggle}
                            classes={{paper: classes.drawerPaper,}} ModalProps={{keepMounted: true}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer variant="permanent" open classes={{paper: classes.drawerPaper,}}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    {
                        (Object.keys(this.props.authUser).length === 0) ? (
                                <div className={'backg'}>
                                    <Route
                                        exact
                                        path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/`}
                                        component={SignIn}/>
                                    <Route
                                        exact
                                        path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/signin`}
                                        component={SignIn}/>

                                    <Route exact
                                           path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/signup`}
                                           component={SignUp}/>
                                    <Route exact
                                           path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/verification`}
                                           component={Verification}/>
                                </div>
                            ) :
                            <Route
                                exact
                                path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/:categoryId?/:postId?`}
                                render={(props) =>
                                    <div>
                                        <div style={{'marginBottom': '10px'}}>
                                            <Typography variant={'display3'}>

                                            </Typography>
                                        </div>
                                        <Paper className={"app-containerr"} style={{height: '73vh', marginTop: '60px'}}>
                                            <Category {...props}/>
                                            <Post {...props}/>
                                            <PostSummary1 {...props}/>
                                        </Paper>
                                    </div>
                                }/>
                    }

                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('My Books\n(React)')}`}
                           component={BooksRead}/>

                    <Route exact
                           path={`/portfolio/${slug('Web Apps')}/${slug('AWS Metrics Dashboard\n(MEAN + Python)')}`}
                           component={AwsMetrics}/>
                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('Customer Onboarding Wizard\n(React)')}`}
                           component={CustomerOnboarding}/>
                    <Route exact path={`/portfolio/${slug('Web Apps')}/${slug('This-App-ReactRedux')}`}
                           component={ThisApp}/>

                    <Route exact path={`/portfolio/${slug('Technical Skills')}`} component={TechnicalSkills}/>


                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Teradata')}`}
                           component={Teradata}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Alliacense')}`}
                           component={Alliacense}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('Startups')}`}
                           component={Startups}/>
                    <Route exact path={`/portfolio/${slug('Professional Experience')}/${slug('UCLA SEAS')}`}
                           component={Seas}/>


                    <Route exact path={`/portfolio/${slug('Time Line')}`} component={TimeLineWork}/>


                    <Route exact
                           path={`/portfolio/${slug('Accomplishments')}/${slug('1st Prize Teradata AI Hackathon')}`}
                           component={AiHackathon}/>
                    <Route exact
                           path={`/portfolio/${slug('Accomplishments')}/${slug('2nd Prize Teradata Service Analytics Hackathon')}`}
                           component={ServiceAnalyticsHackathon}/>
                    <Route exact
                           path={`/portfolio/${slug('Accomplishments')}/${slug('5th Position Teradata UI/UX Hackathon')}`}
                           component={UiHackathon}/>
                    <Route exact
                           path={`/portfolio/${slug('Accomplishments')}/${slug('Patent Co-author (Invention Disclosure Report)')}`}
                           component={Patent}/>
                    <Route exact
                           path={`/portfolio/${slug('Accomplishments')}/${slug('AWS Certified Solution Architect')}`}
                           component={AwsCsa}/>
                    <Route exact path={`/portfolio/${slug('Accomplishments')}/${slug('Certified Scrum Master')}`}
                           component={Csm}/>


                    {/*<Route exact path={`/portfolio/${slug('Machine Learning/Finance')}/${slug('1')}`}*/}
                           {/*component={Jupyterr}/>*/}
                    {/*<Route exact path={`/portfolio/${slug('Machine Learning/Finance')}/${slug('2')}`}*/}
                           {/*component={Jupyterr}/>*/}


                    <Route exact path={`/portfolio/${slug('Resume')}`} component={Resume}/>

                    <Route exact path={`/portfolio/${slug('Education')}`} component={Education}/>

                    <Route exact path={`/portfolio/${slug('Books Read')}`} component={BooksApp}/>
                    <Route exact path={`/portfolio/${slug('Books Read')}/search`} component={BooksApp}/>


                    <Route exact path={`/portfolio/${slug('About Me')}`} component={AboutMe}/>
                    <Route exact path={`/portfolio/${slug('Contact Info')}`} component={ContactInfo}/>


                </main>
            </div>
        );
    }
}

NavDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
    return {
        activeMainCategory: state.activeMainCategory,
        activeSubCategory: state.activeSubCategory,
        navbarData: state.navbarData,
        authUser: state.authUser,
        categories: state.categories,

    }
}
const mapDispatchToProps = (dispatch) => ({

    getNavbarData: () => dispatch(getNavbarData()),
    changeActiveSubCategory: (subCategory) => dispatch(changeActiveSubCategory(subCategory)),
    addAuthUser: (authUser) => dispatch(addAuthUser(authUser)),


})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(NavDrawer));
