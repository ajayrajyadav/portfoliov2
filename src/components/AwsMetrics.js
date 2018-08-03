import React, { Component } from "react";
import Title from "./Title";
import Paper from "@material-ui/core/Paper";
import PictureSwiper from "./PictureSwiper";
import Typography from "@material-ui/core/Typography";
const imageList = [
    {
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
    },
];
class AwsMetrics extends Component {
  render() {
    return (
        <div>
            <Title title={'AWS Metrics Dashboard'}>
                <Typography style={{fontSize: '22px'}} variant={'display1'}>
                    Teradata
                </Typography>
                <Typography style={{fontSize: '16px'}} variant={'display1'}>
                    Jun 2017 - Jan 2018
                </Typography>
            </Title>
          <div className={'me'}>
            <Paper className={'me-c'}>
              <PictureSwiper imageList={imageList}/>
            </Paper>
          </div>
        </div>
    )
  }
}

export default AwsMetrics;
