import React, {Component} from "react";
import SkillBars from "./SkillBars/SkillsBars";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Title from "./Title";

const skills = {
    'Front End': [
        {type: "React", level: 99},
        {type: "Angular", level: 30},


    ],
    'Back End (Server)': [
        {type: "Python", level: 99},
        {type: "Node", level: 50},
        {type: "Amazon AWS", level: 99},
        {type: "NGINX", level: 20},
        {type: "RPMs", level: 99},
        {type: "Linux (SLES11/12)", level: 99},
        {type: "Amazon API Gateway", level: 80},
        {type: "Amazon Lambda", level: 80},
        {type: "Amazon Cognito", level:80 },
        {type: "Amazon CloudFront", level: 80},
        {type: "C++", level: 30},




    ],
    'Back End (Database)': [
        {type: "DynamoDB", level: 99},
        {type: "MongoDB", level: 99},
        {type: "PostgreSQL", level: 20},


    ],
    'Misc': [
        {type: "Presentation", level: 99},
        {type: "Agile", level: 99},
    ],
}


class TechnicalSkills extends Component {
    render() {
        return (
            <div>
                <Title title={'Technical Skills'}/>


                <Paper>
                {
                    Object.keys(skills).map(s=>(
                        <div>
                        <SkillBars
                            hue="300" saturation="40"
                            title={s}
                            skills={skills[s]}

                        />
                            <Divider/>
                        </div>


                    ))
                }

            </Paper>
            </div>
        )
    }
}

export default TechnicalSkills;
