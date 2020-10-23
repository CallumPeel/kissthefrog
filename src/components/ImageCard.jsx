import React from 'react';
import { findAllByDisplayValue } from '@testing-library/react';

const cardStyle = {
    width:"225px", 
    height:"330px",
    marginTop: "10px"
}

const imageStyle = {
    width:"100%", 
    height: "100%", 
    objectFit:"cover",
    borderRadius: "20px",
    boxShadow: "10px 10px black"
}

export function ImageCard(props) {
    return (
    <div style={cardStyle}>
       <img style={imageStyle} src={props.fileName} alt={props.fileNameAltText}></img> 
    </div>
    );
}





