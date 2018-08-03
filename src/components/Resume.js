import React, {Component} from "react";
import Title from "./Title";

class Resume extends Component {
    render() {
        return (
            <div style={{ width:"100%", height:"100%"}}>
                <Title title={'Resume [To Do]'}>
                </Title>
                <iframe
                    src="https://onedrive.live.com/embed?cid=DD2F17EFF3D418F8&amp;resid=DD2F17EFF3D418F8%212640&amp;authkey=AH99OyC7RVj1Jvg&amp;em=2&amp;wdStartOn=1"
                    width="100%" height="100%" frameBorder="0">This is an embedded <a target="_blank"
                                                                                        href="https://office.com">Microsoft
                    Office</a> document, powered by <a target="_blank" href="https://office.com/webapps">Office
                    Online</a>.
                </iframe>
            </div>

        )
    }
}

export default Resume;
