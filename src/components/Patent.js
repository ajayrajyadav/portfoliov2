import React, { Component } from "react";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import PictureSwiper from "./PictureSwiper";

const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/patent/1_1.png',
    },
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/patent/2.png',
    },

];
class Patent extends Component {
  render() {
      return (
          <div>
            <Title title={'Patent'}>
              <Typography style={{fontSize:'22px'}} variant={'display1'}>
                Teradata
              </Typography>
              <Typography style={{fontSize:'16px'}} variant={'display1'}>
                May 2018
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

export default Patent;
