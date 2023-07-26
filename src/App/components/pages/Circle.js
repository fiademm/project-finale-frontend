import React from 'react';
import '../../styles/components.css';

const Circle = (props) => {
    return(
        <>
            <div className="circle" style={{backgroundImage: `url(${props.profileImage})`}}></div>
        </>
    );
};

export default Circle;