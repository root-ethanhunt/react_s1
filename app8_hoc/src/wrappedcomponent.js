import React from 'react';
import withSecretToLife from './withsecrettolife';

const DisplayTheSecret = props => (
 
  <div>  
      <h3>This is <i> "Display The Secret" </i> Component !!! </h3>
      The secret to life is {props.secretToLife}.
  </div>
);

const WrappedComponent = withSecretToLife(DisplayTheSecret);

export default WrappedComponent;