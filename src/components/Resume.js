import React, {Component} from "react";
import Title from "./Title";
// import { Document, Page } from 'react-pdf';

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div style={{ width:"100%", height:"100%"}}>
                <Title title={'Resume'}>
                </Title>
                <iframe src="https://onedrive.live.com/embed?cid=DD2F17EFF3D418F8&resid=DD2F17EFF3D418F8%214033&authkey=AEs_yRlHVWP0KMs&em=2" width="100%" height="80%" frameborder="0" scrolling="no"></iframe>
            </div>

        )
    }
}

export default Resume;
