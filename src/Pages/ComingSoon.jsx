import React from 'react';
import { withGetScreen } from 'react-getscreen';
import '../client/sass/coming-soon.scss';

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
            </div>      
         </div>
        );
    }
}

export default withGetScreen(ComingSoon);
