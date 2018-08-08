import React, {Component} from "react";
import Title from "./Title";
import IntroDialogue from "./readItComponents/IntroDialogue";

class ThisApp extends Component {
    render() {
        return (
            <div style={{ width:"100%", height:"100%"}}>
                <IntroDialogue title={'The app that you are using now'}
                               content={'was created using React'}
                />
                <Title title={'Link to Github'}>
                </Title>
                <a href={'https://github.com/uberman4740/portfoliov2'}><img height='100px' width = '100px' src={'http://csis.pace.edu/~scharff/pacemobilelab/images/github.jpg'}/></a>


            </div>

        )
    }
}

export default ThisApp;
