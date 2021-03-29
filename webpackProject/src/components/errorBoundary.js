import React, { Component } from 'react';

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
      }

      static getDerivedStateFromError(error) {
        console.log('Found error',error);
      }
      
      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          error: error,
          errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
    render() {
        console.log('Error checked');
        if(this.state.errorInfo) {
            return <h1>Inside Error boundaries {this.state.errorInfo.componentStack}</h1>
        }
        return (
            this.props.children
        );
    }
}

export default ErrorBoundaries;