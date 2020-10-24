import React from 'react';
import { findAllByDisplayValue } from '@testing-library/react';

const cardStyle = {
    width:"225px", 
    height:"330px",
    marginTop: "10px",
    marginBottom: "20px"
}

const imageStyle = {
    width:"100%", 
    height: "100%", 
    objectFit:"cover",
    borderRadius: "20px",
    //boxShadow: "0px 0px 5px 5px rgba(174, 175, 176, 1)",
    borderColor: "rgba(174, 175, 176, 1)",
    borderStyle: "dashed",
}

export function ImageCard(props) {
    return (
    <div style={cardStyle}>
       <img style={imageStyle} src={props.fileName} alt={props.fileNameAltText}></img> 
    </div>
    );
}





