import Typography from "@material-ui/core/Typography";
import React, {Component} from "react";


class TechnologiesKnown extends Component {
    render() {
        console.log("childre", this.props.children)
        return (
            <div className={'skills-c'}>
                <div className={'frontend'}>
                    <Typography style={{paddingTop: '10px', paddingBottom: '10px'}} variant={'heading'}>
                        Front End
                    </Typography>
                    <div className={'skills-i'}>
                        <img height= '50px' width={'50px'} src="https://www.shareicon.net/data/256x256/2016/07/08/116973_development_512x512.png"/>
                        <img height= '50px' width={'50px'} src="https://www.shareicon.net/data/256x256/2016/07/10/119874_apps_512x512.png"/>
                                            </div>

                </div>
                <div className={'server'}>
                    <Typography style={{paddingTop: '10px', paddingBottom: '10px'}} variant={'heading'}>
                        Back End
                    </Typography>
                    <div className={'skills-i'}>
                        <img height= '50px' width={'50px'} src="http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico"/>
                        <img height= '50px' width={'50px'} src="https://cdn.iconscout.com/public/images/icon/free/png-256/nodejs-logo-36559ec903b263f5-256x256.png"/>
                        <img height= '50px' width={'50px'} src="https://www.shareicon.net/download/2016/06/19/603904_cplusplus.ico"/>
                        <img height= '50px' width={'50px'} src="https://cdn.iconscout.com/public/images/icon/free/png-256/suse-operating-system-os-377ca65fa5f8e133-256x256.png"/>
                        <img height= '50px' width={'50px'} src="https://sdk-for-net.amazonwebservices.com/images/AWSLogo128x128.png"/>



                    </div>


                </div>
                <div className={'database'}>
                    <Typography style={{paddingTop: '10px', paddingBottom: '10px'}} variant={'heading'}>
                        Database
                    </Typography>
                    <div className={'skills-i'}>
                        <img height= '50px' width={'50px'} src="https://www.shareicon.net/download/2015/08/28/92226_database.ico"/>
                        <img height= '50px' width={'50px'} src="https://raw.githubusercontent.com/joelgarciajr84/simple-crud-with-php-mongodb-twitter-bootstrap/master/img/mongodb.png"/>
                        <img height= '50px' width={'50px'} src="http://www.iconhot.com/icon/png/rrze/256/database-postgres.png"/>


                    </div>

                </div>
                <div className={'misc'}>
                    <Typography style={{paddingTop: '10px', paddingBottom: '10px'}} variant={'heading'}>
                        Misc
                    </Typography>
                    <div className={'skills-i'}>

                        <img height= '50px' width={'50px'} src="http://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Microsoft-PowerPoint-2013-icon.png"/>
                        <img height= '70px' width={'70px'} src="https://www.skyarch.net/blog/wp-content/uploads/2018/02/Telerik.Web_.UI_.WebResource.png"/>
                        <img height= '70px' width={'70px'} src="https://scrumalliance.org/ScrumRedesignDEVSite/media/CertificationType/SAI_BadgeSizes_DigitalBadging_CSM.png"/>



                        {/*<img height= '50px' width={'50px'} src="http://www.iconhot.com/icon/png/rrze/256/database-postgres.png"/>*/}
                        {/*<img height= '50px' width={'50px'} src="http://www.iconhot.com/icon/png/rrze/256/database-postgres.png"/>*/}

                    </div>
                </div>

            </div>
        )
    }
}

export default TechnologiesKnown;
