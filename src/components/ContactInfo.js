import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const aboutMeData = {
    'Name': {
        'title': 'kvsagoo@gmail.com',
        'link':'Karan Sagoo'
    },
    'Email': {
        'title': 'kvsagoo@gmail.com',
        'link': <a href={`mailto:kvsagoo@gmail.com`}>kvsagoo@gmail.com</a>
    },
    'Github': {
        'title': 'Github',
        'link': <a href={`https://github.com/uberman4740`}><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
        </a>
    },
    'LinkedIn': {
        'title': 'LinkedIn',
        'link': <a href={`https://linkedin.com/in/ksagoo`}><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" /></a>
    },


}

class ContactInfo extends Component {
    render() {
        return (
            <div>
                <Title title={'Contact information'}/>
                <Paper>
                    <div style={{padding: '3rem 2rem 3rem 3rem'}}>
                        {
                            Object.keys(aboutMeData).map(d => (
                                <div>
                                    <Typography style={{fontSize: '16px', paddingTop: '10px'}} variant={'display1'}>
                                        {d}
                                    </Typography>
                                    <Typography style={{fontSize: '18px', paddingBottom: '5px', paddingTop: '2px'}}
                                                variant={'heading'}>
                                        {aboutMeData[d]['link']}
                                    </Typography>
                                    <Divider/>

                                </div>

                            ))
                        }
                    </div>
                </Paper>
            </div>
        )
    }
}

export default ContactInfo;
