import React from 'react';
import withSecretToLifeHOC from './withsecrettolife';

const DisplayTheSecret = props => (
 
  <div>  
      <h3>This is <i> "Display The Secret" </i> Component !!! </h3>
      The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLifeHOC(DisplayTheSecret);

export default WrappedComponent;