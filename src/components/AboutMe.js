import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import * as slug from "slug";
import Link from "react-router-dom/es/Link";
import Title from "./Title";
import TechnologiesKnown from "./TechnologiesKnown";

const aboutMeData = {
    'Name': 'Karan Sagoo',
    'Resident status': 'US Citizen',
    'Employment status': 'Employed at Teradata',
    'Certifications': 'Amazon AWS Certified Solution Architect, Agile Certified Scrum Master',
    'Resume': <Link to={`/portfolio/${slug('Resume')}/`}><img src="https://png.icons8.com/color/50/000000/resume.png"/></Link>,
    'Technical Skills': <TechnologiesKnown/>

}

class AboutMe extends Component {
    render() {
        return (
            <div>

                <Title title={'About me'}/>
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
                                        {aboutMeData[d]}
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

export default AboutMe;
