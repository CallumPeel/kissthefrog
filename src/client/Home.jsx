import React from "react";
import { findByLabelText } from "@testing-library/react";
import "../client/sass/navbar.scss";
import { faHome } from "@fortawesome/fontawesome-svg-core";
import { faFrog } from '@fortawesome/fontawesome-free-solid';
import { faQuestion } from '@fortawesome/fontawesome-free-solid';
import { faPhone } from '@fortawesome/fontawesome-free-solid';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withGetScreen } from 'react-getscreen';


const navBarStyle = {
    padding: "20px",
    margin: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#8AF7B1",
    fontFamily: "Adamina",
    fontSize: "1.5rem"
};  

const navbarIconStyle = {
    marginRight:'5px',
    opacity: 0.75,
}

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isMobile())
        {
            return (
                <div>
                    <div style= {navBarStyle}>               
                        <div>
                            <a class="navbarLink" href="/"><FontAwesomeIcon style={navbarIconStyle} icon={faFrog}/></a>
                        </div>
                        <div>
                            <a class="navbarLink" href="/about"><FontAwesomeIcon style={navbarIconStyle} icon={faUser}/></a>
                            </div>   
                        <div>
                            <a class="navbarLink" href="/contactme"><FontAwesomeIcon style={navbarIconStyle} icon={faPhone}/></a>
                        </div>       
                        <div>
                            <a class="navbarLink" href="/FAQs"><FontAwesomeIcon style={navbarIconStyle} icon={faQuestion}/></a>
                        </div>
                    </div>
                </div>
            );  
        }

        return (
            <div>
                <div style= {navBarStyle}>               
                    <div>
                        <FontAwesomeIcon style={navbarIconStyle} icon={faFrog}/>
                        <a class="navbarLink" href="/">Home</a>
                    </div>
                    <div>
                        <FontAwesomeIcon style={navbarIconStyle} icon={faUser}/>
                        <a class="navbarLink" href="/about">About</a>
                        </div>   
                    <div>
                        <FontAwesomeIcon style={navbarIconStyle} icon={faPhone}/>
                        <a class="navbarLink" href="/contactme">Contact</a>
                    </div>       
                    <div>
                        <FontAwesomeIcon style={navbarIconStyle} icon={faQuestion}/>
                        <a class="navbarLink" href="/FAQs">FAQs</a>
                    </div>
                </div>
            </div>
        );       
    }
}

export default withGetScreen(Home);