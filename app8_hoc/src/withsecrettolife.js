import React from 'react';

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          secretToLife={13}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLife;