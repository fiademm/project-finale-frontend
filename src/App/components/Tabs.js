import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ActiveTabButton, TabButton } from './Buttons';

const TabOne = (props) => {
  return (
    <div className='tabs-component-container'>
      <ActiveTabButton buttonText='UI/UX Design' buttonLink='/designpath' />
      <TabButton buttonText='Mobile Development' buttonLink='/mobilepath' />
      <TabButton buttonText='Web Development' buttonLink='/webpath' />
    </div>
  );
};

const TabTwo = (props) => {
  return (
    <div className='tabs-component-container'>
      <TabButton buttonText='UI/UX Design' buttonLink='/designpath' />
      <ActiveTabButton buttonText='Mobile Development' buttonLink='/mobilepath' />
      <TabButton buttonText='Web Development' buttonLink='/webpath' />
    </div>
  );
};

const TabThree = (props) => {
  return (
    <div className='tabs-component-container'>
      <TabButton buttonText='UI/UX Design' buttonLink='/designpath' />
      <TabButton buttonText='Mobile Development' buttonLink='/mobilepath' />
      <ActiveTabButton buttonText='Web Development' buttonLink='/webpath' />
    </div>
  );
};



export { TabOne, TabTwo, TabThree };