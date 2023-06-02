import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const FilledButton = (props) => {
    return(
        <>
            <Link to={props.buttonLink}>
                <button className='filled-button' onClick={props.buttonOnClick}>{props.buttonText}</button>
            </Link>
        </>
    );
}

const OutlinedButton = (props) => {
    return(
        <>
            <button className='outlined-button'>{props.buttonText}</button>
        </>
    );
}

const LinkButton = (props) => {
    return(
        <>
            <Link to={props.buttonLink}>
                <button className='link-button' onClick={props.buttonOnClick}>{props.buttonText}</button>
            </Link>
        </>
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