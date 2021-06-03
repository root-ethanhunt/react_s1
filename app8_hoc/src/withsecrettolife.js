import React from 'react';

const withSecretToLifeHOC = (OriginalComponent) => {
  class HOC extends React.Component {
    render() {
      return (
        <OriginalComponent
          {...this.props}
          secretToLife={13}
        />
      );
    }
  }
    
  return HOC;
};

export default withSecretToLifeHOC;