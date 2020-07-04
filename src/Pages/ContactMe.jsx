import React from "react";
import withGetScreen from "react-getscreen";
import Navbar from "../components/Navbar";

function myFunction(number) {
    return console.log(number);
}

class ContactMe extends React.Component {
    constructor(props){
        this.getContactDetails();
        super(props);

    }

    getContactDetails() {
        //write code here
        this.props.phoneNumber; //make post request here
    }

    render() {
        myFunction(7);
        return (<Navbar/>);
    }
}

export default Home;
