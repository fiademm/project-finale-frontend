import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Tabs = ({ tabs }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index) => {
        setActiveTabIndex(index);
    };
    
    return(
        // <div className='tabs-component-container'>
        //    <TabButton className="tab-button" tabText='UI/UX Designer' tabLink='' iconSource='' hoveredIconSource=''>UI/UX Design</TabButton>
        //    <TabButton className="tab-button" tabText='Mobile Development' tabLink='' iconSource='' hoveredIconSource=''>Mobile Development</TabButton>
        //    <TabButton className="tab-button" tabText='Web Development' tabLink='' iconSource='' hoveredIconSource=''>Web Development</TabButton>
        // </div>

        <div>
            <ul>
                {tabs.map((tab, i) => (
                <li key={i} onClick={() => handleTabClick(i)}>
                    {tab}
                    {activeTabIndex === i && <span style={{ textDecoration: "underline" }} />}
                </li>
                ))}
            </ul>
            {tabs.map((tab, i) => (
                <div key={i} style={{ display: i === activeTabIndex ? "block" : "none" }}>
                <h2>{tab}</h2>
                <p>This is the content of the tab.</p>
                </div>
            ))}
        </div>
    );
};


export default Tabs;