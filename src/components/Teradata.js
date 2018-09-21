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

const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/1.png',
    },
    {
        label: '1. Work with something that you like, like…',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/2.png',
    },
    {
        label: '2. Keep your friends close to you and hangout with them',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/3.png',
    },
    {
        label: '3. Travel everytime that you have a chance',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/4.png',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/5.png',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/6.png',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/7.png',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/8.png',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r1/9.png',
    },
];
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
        'title': 'Platform Engineering',
        'summary': 'Developed a web app (front and back end) that grabs cabinet power usage data from individual Mellanox Switches, Servers, NetApp Controllers.',
        'date': 'Nov 2016 - Jun 2017',
        'S': 'Measuring Teradata system (nodes, Mellanox switches, NetApp controllers and storage arrays) power usage was manual process using multimeters.\n' +
        'No infrastructure for performing analytics on system power usage.',
        'T': 'Develop a product to store and display power usage data for a Teradata system.',
        'A': 'Initiated:\n' +
        '1. Weekly meetings with the owners of each chassis to first understand the needs of the product.\n' +
        '  2. Cross dept. mini hackathon to compare the polling times related to different architectures\n' +
        'Developed:\n' +
        '  1. Individual scripts for grabbing data from each chassis type.\n' +
        '  2. Central database for the power data and error data.',

        'R':

        'Stretched the goal space by:\n' +
        '  1. Providing solution for multiple systems instead of just one.\n' +
        '  2. Decreasing polling period for each system from 12 to 9 seconds.\n' +
        '  3. Providing API endpoints for end users who do not want to use CLI commands.\n' +
        '  4. Recognized company’s change management strategy of breaking down silos and initiated cross dept. and organization meetings and mini hackathon.',
        'tech': 'Backend\n' +
        '•\tPython – grabbing data from each chassis \n' +
        '•\tMongoDB – database for storing power data and for errors data\n' +
        '•\tNode – Server\n' +
        '•\tNGINX – Reverse Proxy\n' +
        'Front End\n' +
        '•\tReact/Redux – Dashboard\n',




    },
    {
        'title': 'Platform Cloud Engineering',
        'summary': 'Developed a dashboard (front-end and back-end) that displayed real-time and historical AWS usage data, and reduced unnecessary expenditures by stopping idle ec2 instances.',
        'date': 'Jun 2017 - Jan 2018',
        'S': 'Company’s new strategy of Teradata on cloud required a dashboard for monitoring and measuring cloud performance on AWS and Azure.\n' +
        'Present solutions leveraged Grafana that handicapped certain personas from gaining meaningful insights or implementable actions for their team.',
        'T': 'Develop a Dashboard for the cloud performance team to monitor and measure EC2 cloud usage and performance data.',
        'A': 'Attained Amazon AWS Certified Solution Architect Certification.\n' +
        'Developed the front end and backend of production ready Web App that displayed real-time and historical AWS usage data.',
        'R': 'Stretched the goal space by:\n' +
        '1.\tAttaining AWS Certified Solution Architect Certification\n' +
        '2.\tDisplaying live AWS usage data\n' +
        '3.\tReducing unnecessary expenditure by stopping idle ec2 instances\n',
        'tech': 'Backend\n' +
        '•\tPython (boto3) – grabbing and storing AWS performance data\n' +
        '•\tMongoDB – database for AWS performance and database for boto3 errors data\n' +
        '•\tSocket.io – Serving live data to front end\n' +
        '•\tNGINX – reverse proxy for API calls from Angular to Node server\n\n' +
        'Front End\n' +
        '•\tAngular – Dashboard\n' +
        '•\tngx-charts - Live Graphing\n',
        'media': [{
            label: 'How to be happy :)',
            imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r2/1.png',
        },
            {
                label: '1. Work with something that you like, like…',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r2/2.png',
            },
            {
                label: '2. Keep your friends close to you and hangout with them',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r2/3.png',
            },
            {
                label: '3. Travel everytime that you have a chance',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r2/4.png',
            },
            {
                label: '4. And contribute to Material-UI :D',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r2/5.png',
            },],
    },
    {
        'title': 'Server Engineering ',
        'summary': 'Developed and built the rpm for auditing and updating intel firmware on customer servers.',
        'date': 'Jan 2018 - Aug 2018',
        'S': 'Present procedure for auditing and updating BIOS firmware at the server staging stage was manual and by hand.\n' +
        'Teradata system delivery got delayed to customers because conflicting settings were found at later stages of staging the system.',
        'T': 'Develop RPM package that audit the Intel firmware.',
        'A': 'Developed the script for auditing the intel firmware\n' +
        'Wrote unit tests and automated the rpm build process\n' +
        'Introduced git and software versioning to the team\n',
        'R': 'Reduced Teradata system delivery time by automating auditing intel FW\n' +
        'Reduced development time by writing unit tests and automating rpm build process\n',
        'tech': 'Python, Jenkins (potential next step)',
        'media': [
            {
                label: '1. Work with something that you like, like…',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r3/1.png',
            },
            {
                label: '2. Keep your friends close to you and hangout with them',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r3/2.png',
            },
            {
                label: '3. Travel everytime that you have a chance',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r3/3.png',
            },
            {
                label: '3. Travel everytime that you have a chance',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/r3/4.png',
            },
        ],
    },


    {
        'title': 'Teradata Excellence Award - Service Analytics',

        'summary': 'Collaborated with the VP of Customer Support to identify a set of problem spaces.\n' +
        'Recruited and led a team of 6 to develop a POC that provided predictive, preventive, and prescriptive solution for server failure.\n' +
        'Achieved reduction in customer support hours by 89 hours per month.',
        'date': '',
        'S': 'The director of my dept. referred me to provide a  predictive, preventative and prescriptive solution for the Global Support Organization.',
        'T': 'Identify immediate need and develop a POC product that aligns with companies new initiative of applying data analytics within the company',
        'A': 'Collaborated with the VP of the GSO Dept. to identify a set of problem spaces.\n' +
        'Recruited and led a team of 6 across Teradata to develop the solution.',
        'R': 'Solution selected for the roadmap \n' +
        'Customer support reduction by 89 hours per month\n',
        'tech': 'Python',
        'media': [
            {
                label: 'How to be happy :)',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/nodefailure/1.png',
            },
            {
                label: '1. Work with something that you like, like…',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/nodefailure/2.png',
            },
            {
                label: '2. Keep your friends close to you and hangout with them',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/nodefailure/3.png',
            },
            {
                label: '3. Travel everytime that you have a chance',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/nodefailure/4.png',
            },
            {
                label: '4. And contribute to Material-UI :D',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/nodefailure/5.png',
            },
        ],
    },
    {
        'title': 'Customer Onboarding Wizard ',
        'summary': 'Developed customer the onboarding dashboard by applying Truth Tables for decision logic.',
        'date': '',
        'S': 'Company’s new product – Teradata Intellicloud, did not have a guided customer onboarding wizard.\n' +
        'Customer onboarding included back forth emails and phone calls that delayed customer onboarding, which at times costed the company ~$150K. ',
        'T': 'Approached by Product Manager of the IntelliCloud team to develop a AWS based POC solution for a guided customer onboarding wizard that could eventually be included in the roadmap',
        'A': 'Developed and applied innovative logic of applying truth tables for providing solutions based on different answers provided by the customer.\n' +
        'Developed the front end of the customer on boarding wizard app.',
        'R': 'Developed POC is in yearly roadmap.\n' +
        'Designed customer onboarding wizard using truth tables has the potential to be used for new products.\n' +
        'Increased revenue and customer satisfaction by guidance wizard instead of email and phone calls\n',
        'tech': 'Backend\n' +
        '•\tPython (boto3) – grabbing and storing AWS performance data\n' +
        '•\tDynamoDB – database for Truth Table logic\n' +
        '•\tLambda– Serveless API GET CALLS\n' +
        '•\tCognito– Customer Login\n' +
        '•\tAPI GATEWAY – API Calls\n\n' +
        'Front End\n' +
        '•\tReact/Redux – Dashboard\n',
        'media': [
            {
                label: 'How to be happy :)',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/customer_onboarding_wizard/1.png',
            },
            {
                label: '1. Work with something that you like, like…',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/customer_onboarding_wizard/2.png',
            },
            {
                label: '2. Keep your friends close to you and hangout with them',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/customer_onboarding_wizard/3.png',
            },
            {
                label: '3. Travel everytime that you have a chance',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/customer_onboarding_wizard/4.png',
            },
            {
                label: '4. And contribute to Material-UI :D',
                imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/customer_onboarding_wizard/5.png',
            },
        ],
    },
    {
        'title': 'Platform Integration Engineering',
        'summary': 'Responsible for developing the checksum algorithm and implementing it in C.',
        'date': 'Aug 2018 - Present',
        'S': 'To do',
        'T': 'To do',
        'A': 'To do',
        'R': 'To do',
        'tech': 'To do',
        'media': '',
    },
]

class Teradata extends Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    render() {
        const {classes} = this.props;
        const { expanded } = this.state;


        return (
            <div style={{whiteSpace: 'pre-line'}}>
                <Title title={'Teradata'}>
                    <Typography style={{fontSize: '22px'}} variant={'display1'}>
                        Software Engineer (Rotation Program)
                    </Typography>
                    <Typography style={{fontSize: '16px'}} variant={'display1'}>
                        2016 - Present
                    </Typography>
                </Title>
                <div className={classes.root}>
                    {
                        data.map(d => (
                            <ExpansionPanel >
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography className={classes.heading}>
                                        <span style={{fontWeight: 'bold'}}>{d.title}</span>
                                        <div>{d.summary}</div>
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div>
                                        <div className={'o-c'}>
                                            <div className={'overlay'}>
                                                <div className={'big'}>
                                                    <div className={'inside'}>
                                                        {d.S}
                                                    </div>
                                                </div>
                                                <Paper square={'true'} style={{backgroundColor: '#304086'}}
                                                       elevation={'10'}
                                                       className={'small'}>S</Paper>
                                            </div>

                                            <div className={'overlay'}>

                                                <div className={'big'}>
                                                    <div className={'inside'}>
                                                        {d.T}

                                                    </div>
                                                </div>

                                                <Paper square={'true'} style={{backgroundColor: '#304086'}}
                                                       elevation={'10'}
                                                       className={'small'}>T</Paper>


                                            </div>
                                            <div className={'overlay'}>
                                                <div className={'big'}>
                                                    <div className={'inside'}>
                                                        {d.A}

                                                    </div>
                                                </div>
                                                <Paper square={'true'} style={{backgroundColor: '#304086'}}
                                                       elevation={'10'}
                                                       className={'small'}>A</Paper>
                                            </div>
                                            <div className={'overlay'}>
                                                <div className={'big'}>
                                                    <div className={'inside'}>
                                                        {d.R}

                                                    </div>
                                                </div>
                                                <Paper square={'true'} style={{backgroundColor: '#304086'}}
                                                       elevation={'10'}
                                                       className={'small'}>R</Paper>
                                            </div>
                                            <div className={'overlay'}>
                                                <div className={'big'}>
                                                    <div className={'inside'}>
                                                        {d.tech}
                                                    </div>
                                                </div>
                                                <Paper square={'true'} style={{backgroundColor: '#304086'}}
                                                       elevation={'10'}
                                                       className={'small'}>Tech</Paper>
                                            </div>
                                        </div>
                                        <div className={'me'}>
                                            <Paper className={'me-c'}>
                                                <PictureSwiper imageList={d.media}/>
                                            </Paper>
                                        </div>


                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        ))

                    }


                </div>
            </div>





        )
    }
}

Teradata.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Teradata);
