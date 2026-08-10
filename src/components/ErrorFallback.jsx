import React from "react";

// React Error Boundaries must be class components because the
// componentDidCatch and getDerivedStateFromError lifecycle methods
// are only available on classes, not on function components.
class ErrorFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Called after a descendant component throws an error.
  // Used here to update state so the next render shows the fallback UI.
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  // Called after an error has been thrown by a descendant component.
  // Useful for logging the error somewhere (e.g. an error reporting service).
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback" role="alert">
          <p>Something went wrong. Please reload the application.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorFallback;
