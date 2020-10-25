import React from 'react';
import { withGetScreen } from 'react-getscreen';
import '../client/sass/coming-soon.scss';
import { ImageCard } from './../components/ImageCard';

class ComingSoon extends React.Component {
    constructor(props){
        super(props);
     }
    render(){
        document.body.style = "background-color:rgba(252, 220, 239,1)";
        if(this.props.isMobile())
        {
            return(
                <div>
                    <div className="polygon-container">
                        <div className="clip-polygon"></div>
                    </div>
                    <div class="main-heading-container">
                    <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="main-heading-font-style main-heading-mobile main-heading-mobile-h1">Kiss the Frog</a>
                    <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="main-heading-font-style main-heading-mobile main-heading-mobile-h2">Dolls Clothing</a>
                    <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="description-tagline-mobile description-tagline">Clothing for your 18 inch dolls</a>
                    <div style={{
                        display: "flex", 
                        flexDirection: "row", 
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        marginTop: "50px",
                        marginBottom: "30px"
                        }}>
                        <ImageCard fileName='images/Doll1.jpg' fileNameAltText='doll'/>
                        <ImageCard fileName='images/Doll2.jpg' fileNameAltText='doll2'/>
                        <ImageCard fileName='images/Doll3.jpg' fileNameAltText='doll3'/>
                    </div>
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
                <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="main-heading-font-style main-heading main-heading-h1">Kiss the Frog</a>
                <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="main-heading-font-style main-heading main-heading-h2">Dolls Clothing</a>
                <a href="https://www.etsy.com/au/shop/kissthefrogdc?ref=l2-about-shopname" className="description-tagline">Clothing for your 18 inch dolls</a>
                <div style={{
                    display: "flex", 
                    flexDirection: "row", 
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    marginTop: "50px",
                    marginBottom: "30px"
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
