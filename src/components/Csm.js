import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import PictureSwiper from "./PictureSwiper";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";

const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/csm/1.png',
    },
    {
        label: '1. Work with something that you like, like…',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/csm/2.png',
    },
];
class Csm extends Component {
  render() {
      return (
          <div>
              <Title title={'Agile Certified Scrum Master'}>
                  <Typography style={{fontSize:'22px'}} variant={'display1'}>
                      Teradata
                  </Typography>
                  <Typography style={{fontSize:'16px'}} variant={'display1'}>
                      Jul 2018
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

export default Csm;
