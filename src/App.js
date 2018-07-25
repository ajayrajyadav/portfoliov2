import React, {Component} from 'react';
import './App.css';
import NavDrawer from "./NavDrawer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Auth, API} from "aws-amplify";
import SignIn from "./components/readItComponents/auth/SignIn/SignIn";
import SignUp from "./components/readItComponents/auth/SignUp/SignUp";
import {Verification} from "./components/readItComponents/auth/Verification/Verification";
import Category from "./components/readItComponents/Category/Category";
import Post from "./components/readItComponents/Posts/Post/Post";
import PostSummary1 from "./components/readItComponents/PostDisplay/PostSummary/PostSummar1";
import {addAuthUser} from "./actions/readitActions/authAction";
import connect from "react-redux/es/connect/connect";
import BooksApp from "./components/MyReads/BooksApp";


class App extends Component {
    state = {
        sectionOne: null,
        sectionTwo: null,
        sectionThree: null
    }
    onSubmit = (sectionName, category) => {
        console.log("in onsumbit", sectionName, category)
        this.setState({[sectionName]: category})
    }

    async componentDidMount() {
        const session = await Auth.currentSession()
        console.log("sessions is")

        console.log(session)
        this.props.addAuthUser(session.idToken.payload['cognito:username'])
    }

    render() {
        console.log("G STATE", this.state)

        return (
            <Router>
                {/*<NavDrawer/>*/}
                <div>

                    <Switch>
                        {/*<Route path='/portfolio/r' component={BooksApp}/>*/}

                        <Route path='/portfolio' component={NavDrawer}/>





                        {

                        (Object.keys(this.props.authUser).length === 0) ?
                            <div className={'backg'}>
                                <Route exact path='/wa' component={SignIn}/>
                                <Route exact path='/wa/signin' component={SignIn}/>

                                <Route exact path='/wa/signup' component={SignUp}/>
                                <Route  exact path="/wa/verification" component={Verification}/>
                            </div>
                            :
                                <Route exact path='/wa/:categoryId?/:postId?' render={(props) =>
                                    <div className={"app-containerr"}>
                                        <Category {...props}/>
                                        <Post {...props}/>
                                        <PostSummary1 {...props}/>
                                    </div>}/>
                    }

                    </Switch>


                </div>



            </Router>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log("AUTH USER IN THE HOUSE,", state)

    // console.log("ownPPP", ownProps)
    return {
        authUser: state.authUser,

        categories: state.categories,

    }


}
const mapDispatchToProps = (dispatch) => ({
    addAuthUser: (authUser) => dispatch(addAuthUser(authUser)),

})


export default connect(mapStateToProps, mapDispatchToProps)(App)
