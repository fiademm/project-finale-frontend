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

const FilledButton1 = (props) => {
  return(
      <>
          <Link to={props.buttonLink}>
              <button className='filled-button-1' onClick={props.buttonOnClick}>{props.buttonText}</button>
          </Link>
      </>
  );
}

const FilledButton1Non = (props) => {
  return(
      <>
          <button className='filled-button-1' onClick={props.buttonOnClick}>{props.buttonText}</button>
      </>
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
          <button className='outlined-button-1' onClick={props.buttonOnClick}>{props.buttonText}</button>
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

export { FilledButton, FilledButton1, FilledButton1Non, OutlinedButton, OutlinedButton1, LinkButton, TabButton, ActiveTabButton }