import React from 'react';
import ErrorAlert from './ErrorAlert';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  
  render() {
    if (this.state.errorInfo) {
      return (
        <ErrorAlert open={true} />
      );
    }
    return this.props.children;
  }  
}

export default ErrorBoundary;