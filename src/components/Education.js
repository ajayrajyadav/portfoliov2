import React, { Component } from "react";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import PictureSwiper from "./PictureSwiper";
import Paper from "@material-ui/core/Paper";
const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/ucla/2.jpg',
    }
]
class Education extends Component {
  render() {
    return (
        <div>
        <Title title={'Education [To Do]'}>
          <Typography style={{fontSize:'22px'}} variant={'display1'}>
            UCLA - Electrical and Computer Engineering, B.S.
          </Typography>
          <Typography style={{fontSize:'16px'}} variant={'display1'}>
            Sept 2015
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

export default Education;
