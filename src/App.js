import React, {Component} from 'react';
import './App.css';
import NavDrawer from "./NavDrawer";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {Auth} from "aws-amplify";

import {addAuthUser} from "./actions/readitActions/authAction";
import connect from "react-redux/es/connect/connect";
import 'typeface-roboto'


class App extends Component {

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
                <div >
                    <Route path='/' component={NavDrawer}/>

                    {/*<Route path='/portfolio' component={NavDrawer}/>*/}


                    {/*<Switch>*/}
                        {/*/!*<Route path='/portfolio/r' component={BooksApp}/>*!/*/}

                        {/*<Route*/}
                            {/*path={`/portfolio/${slug('Web Apps')}/${slug('ReadIt! (AWS Serverless, React, Redux)')}/:categoryId?/:postId?`}*/}
                            {/*render={(props) =>*/}
                               {/*<div className={"app-containerr"}>*/}

                                    {/*<Category {...props}/>*/}
                                    {/*<Post {...props}/>*/}
                                    {/*<PostSummary1 {...props}/>*/}

                                {/*</div>}/>*/}






                    {/*</Switch>*/}


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
