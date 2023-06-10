import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const FilledButton = (props) => {
    return(
        <button className={props.buttonStyle} onClick={props.buttonOnClick}>{props.buttonText}</button>
    );
}

const OutlinedButton = (props) => {
    return(
        <>
            <button className='outlined-button' onClick={props.buttonOnClick}>{props.buttonText}</button>
        </>
    );
}

const OutlinedButton1 = (props) => {
  return(
      <>
        <Link to={props.buttonLink}>
          <button className='outlined-button-1' onClick={props.buttonOnClick}>{props.buttonText}</button>
        </Link>
      </>
  );
}

const LinkButton = (props) => {
    return(
      <Link to={props.buttonLink}>
        <button className='link-button' onClick={props.buttonOnClick}>{props.buttonText}</button>
      </Link>
    );
}

const TabButton = (props) => {
    return (
      <>
        <Link to={props.buttonLink} className='tab-button' >
          {props.buttonText}
        </Link>
      </>
    );
  }

  const ActiveTabButton = (props) => {
    return (
      <>
        <Link to={props.buttonLink} className='active-tab-button' >
          {props.buttonText}
        </Link>
      </>
    );
  }

export { FilledButton, OutlinedButton, LinkButton, TabButton, ActiveTabButton }