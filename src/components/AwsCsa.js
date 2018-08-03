import React, {Component} from "react";
import Title from "./Title";
import Paper from "@material-ui/core/Paper";
import PictureSwiper from "./PictureSwiper";
import Typography from "@material-ui/core/Typography";

const imageList = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://s3.amazonaws.com/portfolio-assets-4740/assets/csa/1.png',
    }
]
class AwsCsa extends Component {
    render() {
        return (
            <div>
                <Title title={'Amazon AWS Certfied Solution Architect'}>
                    <Typography style={{fontSize: '22px'}} variant={'display1'}>
                        Teradata
                    </Typography>
                    <Typography style={{fontSize: '16px'}} variant={'display1'}>
                        Jul 2017
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

export default AwsCsa;
