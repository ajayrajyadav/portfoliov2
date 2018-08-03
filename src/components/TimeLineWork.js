import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Paper from "@material-ui/core/Paper";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";

const data = {
  'Jul 2018':
      {
          'type':'accomplishment',
          'title':'Agile Certified Scrum Master',
          'company':'',
          'date':'',
          'summary':'',
          'link':'',
          'color':{ background: '#be18ff', color: '#fff' }
      },
    'May 2018':
        {
            'type':'accomplishment',
            'title':'Patent Co-author in IDR',
            'company':'Teradata',
            'date':'',
            'summary':'',
            'link':'',
            'color':{ background: '#be18ff', color: '#fff' }


        },
    'Jul 2017':
        {
            'type':'accomplishment',
            'title':'Amazon Certified Solution Architect',
            'company':'',
            'date':'',
            'summary':'',
            'link':'',
            'color':{ background: '#be18ff', color: '#fff' }


        },
    'Jun 2017':
        {
            'type':'accomplishment',
            'title':'Teradata Excellence Award - Service Analytics',
            'company':'Teradata',
            'date':'',
            'summary':'\nCollaborated with the VP of Customer Support to identify a set of problem spaces.\n' +
            'Recruited and led a team of 6 to develop a POC that provided predictive, preventive, and prescriptive solution for server failure.\n' +
            'Achieved reduction in customer support hours by 89 hours per month.',
            'link':'',
            'color':{ background: '#be18ff', color: '#fff' }

        },
    'Mar 2017':
        {
            'type':'accomplishment',
            'title':'Teradata Excellence Award - Artificial Intelligence',
            'company':'Teradata',
            'date':'',
            'summary':'\nArchitected and led a team of 4 to develop a POC for our automotive insurance client.\nLeveraged driver camera feed, AWS, and Teradata portfolio to predict distracted drivers. ',
            'link':'',
            'color':{ background: '#be18ff', color: '#fff' }

        },
    'Jan 2017 - April 2017':
        {
            'type':'startup',
            'title':'Founder',
            'jobTitle':'',
            'company':'Moving Elves',
            'date':'',
            'summary':'\nApplied Customer Process using principles from the book Startup Owners Manual and The Lean Launchpad',
            'link':'',
            'color':{ background: '#4f5dff', color: '#fff' }


        },
    'Nov 2016 - Present':
        {
            'type':'work',
            'title':'Software Engineer (Rotation Program) - Platform Engineering',
            'jobTitle':'',
            'company':'Teradata',
            'summary':'\nRotate every 6 months to a new team to develop a new product.\nTeams rotated:\n' +
            '\nPlatform Engineering - Developed a solution that grabs cabinet power usage data from individual Mellanox Switches, Servers, NetApp Controllers.\n' +
            '\nPlatform Cloud Engineering - Developed a dashboard (front-end and back-end) that displayed real-time and historical AWS usage data, and reduced unnecessary expenditures by stopping idle ec2 instances.\n' +
            '\nServer Engineering - Developed and built the rpm for auditing and updating intel firmware on customer servers\n' +
            '\nPlatform Integration Engineering - Responsible for developing the checksum algorithm and implementing it in C.',
            'link':'',
            'color':{ background: '#00ff2c', color: '#fff' }

        },
    'Nov 2016':
        {
            'type':'work',
            'title':'Stopped working at Alliacense',
            'jobTitle':'Intellectual Property Analyst Engineer',
            'company':'',
            'summary':'',
            'link':'',
            'color':{ background: '#ff4f4c', color: '#fff' }

        },
    'Jan 2016':
        {
            'type':'startup',
            'title':'Founder',
            'jobTitle':'',
            'company':'Quantitative Finance Machine Learning Strategies',
            'summary':'\n...',
            'link':'',
            'color':{ background: '#4f5dff', color: '#fff' }

        },
    'Sept 2015 - Nov 2016':
        {
            'type':'work',
            'title':'Started work at Alliacense',
            'jobTitle':'Intellectual Property Analyst Engineer',
            'company':'Alliacense',
            'summary':'\nEvaluate Intellectual Property...',
            'link':'',
            'color':{ background: '#00ff2c', color: '#fff' }

        },
    'Sept 2015':{
        'type':'education',
        'title':'Graduated from UCLA',
        'jobTitle':'Electrical and Computer Engineering, B.S.',
        'company':'UCLA',
        'summary':'',
        'link':'',
        'color':{ background: '#ff4f4c', color: '#fff' }


    },

    'June 2015':{
        'type':'work',
        'title':'Stopped working at SEAS UCLA',
        'jobTitle':'Lab Consultant',
        'company':'SEAS UCLA',
        'summary':'\nManaged five engineering computer labs comprising of 200+ computers, monitoring lab usage, updating & troubleshooting: software, hardware, & networking issues.',
        'link':'',
        'color':{ background: '#ff4f4c', color: '#fff' }

    },
    'May 2014':{
        'type':'accomplishment',
        'title':'Collaborated with Dr.s to create a POC non invasive Sepsis Detector',
        'jobTitle':'Embedded Software Engineer Consultant',
        'company':'David Griffith UCLA',
        'summary':'\nConsulted by four doctors to develop a POC non-invasive early stage Sepsis detector.\n'+
        'The device incorporated six bio-sensors, parse for the database to text the doctor when critical care is needed.',
        'link':'',
        'color':{ background: '#be18ff', color: '#fff' }

    },
    'Apr 2014':{
        'type':'startup',
        'title':'Founder',
        'jobTitle':'',
        'company':'PWM Fan',
        'summary':'\nPhysical audio spectrum analyzer based on FFT (Fast Fourier Transform).\n' +
        '6 PWM (pulse width modulated) fans pushed powdered Styrofoam pieces in the air in a transparent box. \n' +
        'The duty cycle of each fan was controlled by the respective frequency of the audio signal',
        'link':'',
        'color':{ background: '#4f5dff', color: '#fff' }

    },
    'March 2014':{
        'type':'work',
        'title':'Started work at SEAS UCLA',
        'jobTitle':'Lab Consultant',
        'company':'SEAS UCLA',
        'summary':'\nManaged five engineering computer labs comprising of 200+ computers, monitoring lab usage, updating & troubleshooting: software, hardware, & networking issues.',
        'link':'',
        'color':{ background: '#00ff2c', color: '#fff' }

    },
    'Jan 2013 - Sept 2014':{
        'type':'startup',
        'title':'Founder',
        'jobTitle':'',
        'company':'BlindHaptic',
        'summary':'\nDeveloped a non-invasive system for blind people. The system consisted of three modules:\n' +
        '(1) Gesture controlled door unlock using MYO,\n' +
        '(2) Automated door guidance using speakers\n' +
        '(3) Three ultrasonic sensors,\n' +
        'for continuous dynamic haptic feedback based on object distance by using 4 ultrasonic sensors mounted on the chest.',
        'link':'',
        'color':{ background: '#4f5dff', color: '#fff' }

    },
    'Sept 2012 - Sept 2015':{
        'type':'education',
        'title':'Started UCLA',
        'jobTitle':'Electrical and Computer Engineering, B.S.',
        'company':'UCLA',
        'summary':'',
        'link':'',
        'color':{ background: '#00ff2c', color: '#fff' }

    },

    'Jan 2012':{
        'type':'startup',
        'title':'Founder',
        'jobTitle':'',
        'company':'cMoy Headphone Amplifier',
        'summary':'\nLorem mi sum Lorem mi sum Lorem mi sum Lorem mi sum Lorem mi sum Lorem mi sum Lorem mi sum ',
        'link':'',
        'color':{ background: '#4f5dff', color: '#fff' }

    }

}




class TimeLineWork extends Component {
  render() {
    return (
        <div>
            <Title title={'Timeline'}/>
        <Paper square={'true'} style={{background:'#e1e1e1'}}>
            <VerticalTimeline>
                {
                    Object.keys(data).map(d=>(

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date={d}
                            iconStyle={data[d].color}
                            icon={''}
                            style={{whiteSpace:'pre-line'}}
                        >
                            <h3 className="vertical-timeline-element-title">{data[d].title}</h3>
                            <div style={{fontStyle:'italic'}} className="vertical-timeline-element-subtitle">{data[d].company}</div>
                            <Typography variant={'caption'}>
                                {data[d].summary}
                            </Typography>
                        </VerticalTimelineElement>

                    ))
                }

            </VerticalTimeline>

        </Paper>
        </div>
    )
  }
}

export default TimeLineWork;
