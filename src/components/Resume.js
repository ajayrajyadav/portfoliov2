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
                <Title title={'Resume [To Do]'}>
                </Title>
                {/*<Document*/}
                    {/*file='../r.pdf'*/}
                    {/*onLoadSuccess={this.onDocumentLoadSuccess}*/}
                {/*>*/}
                    {/*<Page pageNumber={pageNumber} />*/}
                {/*</Document>*/}
                {/*<p>Page {pageNumber} of {numPages}</p>*/}
            </div>

        )
    }
}

export default Resume;
