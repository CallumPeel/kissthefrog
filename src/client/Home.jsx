import React from "react";
import withGetScreen from "react-getscreen";
import Navbar from "../components/Navbar";


class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Navbar/>);
    }
}

export default Home;
