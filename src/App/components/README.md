import React from 'react';
import ReactTooltip from 'react-tooltip';

const MyComponent = () => {
  return (
    <div>
      <h1>React Tooltip Example</h1>
      <button data-tip="Click me!" data-for="my-tooltip">Hover Me</button>
      <ReactTooltip id="my-tooltip" place="bottom" effect="solid">
        This is the tooltip content.
      </ReactTooltip>
    </div>
  );
};

export default MyComponent;
