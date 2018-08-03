import Typography from "@material-ui/core/Typography";
import React, { Component } from "react";


class Title extends Component {
    render() {
        console.log("childre",this.props.children)
        return (
            <div>
                <Typography variant={'display3'} style={{marginBottom:'40px',marginTop:'20px'}}>
                    {this.props.title}
                    {this.props.children}



                </Typography>
            </div>
        )
    }
}

export default Title;
