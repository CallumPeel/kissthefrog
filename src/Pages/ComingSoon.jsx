import React from 'react';
import { withGetScreen } from 'react-getscreen';
import '../client/sass/coming-soon.scss';
import { ImageCard } from './../components/ImageCard';

class ComingSoon extends React.Component {
    constructor(props){
        super(props);
     }
    render(){
        if(this.props.isMobile())
        {
            return(
                <div>
                    <div className="polygon-container">
                        <div className="clip-polygon"></div>
                    </div>
                    <div class="main-heading-container">
                        <div className="main-heading-font-style main-heading-mobile main-heading-mobile-h1">Kiss the Frog</div>
                        <div className="main-heading-font-style main-heading-mobile main-heading-mobile-h2">Dolls Clothing</div>
                        <div className="description-tagline-mobile description-tagline">Clothing for your 18 inch dolls</div>
                    </div>      
                </div>
            );
            
        }
        return(
            <div>
            <div className="polygon-container">
                <div className="clip-polygon"></div>
            </div>
            <div class="main-heading-container">
                <div className="main-heading-font-style main-heading main-heading-h1">Kiss the Frog</div>
                <div className="main-heading-font-style main-heading main-heading-h2">Dolls Clothing</div>
                <div className="description-tagline">Clothing for your 18 inch dolls</div>
                <div style={{
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "nowrap",
                    justifyContent: "space-evenly",
                    marginTop: "50px"
                    }}>
                    <ImageCard fileName='images/Doll1.jpg' fileNameAltText='doll'/>
                    <ImageCard fileName='images/Doll2.jpg' fileNameAltText='doll2'/>
                    <ImageCard fileName='images/Doll3.jpg' fileNameAltText='doll3'/>
                </div>
            </div>      
         </div>
        );
    }
}

export default withGetScreen(ComingSoon);
