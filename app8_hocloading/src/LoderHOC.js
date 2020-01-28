import React from 'react';
//import ReactDOM from 'reactdom';
const LoaderHOC = (propName)=>(WrappedComponent)=>{

    return class LoaderHOC extends React.Component{

          isEmpty(prop){

            return (        prop === null 
                || prop === undefined 
                || (Array.isArray(prop) && prop.lengh === 0) 
                || (prop.constructor === Object && Object.keys(prop).length === 0)
              );
              
         }

         
         render() {
            return (
              this.isEmpty(this.props[propName]) 
              ? <h1 className='loader'>Loading...</h1>
              : <WrappedComponent {...this.props} />)
          }

    }




}
export default LoaderHOC;