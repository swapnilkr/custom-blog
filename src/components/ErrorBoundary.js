import React, { Component } from 'react';
import '../styles/ErrorBoundary.css';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // to render a fallback UI after an error has been thrown
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // to log error information
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="error">Something went wrong.</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
