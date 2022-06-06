import { Component } from "react";
import PropTypes from "prop-types";
import Template from "../Template";
import { Button } from "react-bootstrap";

const Texts = {
  header: "Something went wrong.",
  error: "Error message:",
  resetButton: "Try again",
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    if ("production" !== process.env.NODE_ENV) console.log(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (!this.state.hasError) this.props.children;
    return (
      <Template>
        <h1>{Texts.header}</h1>
        <div>{Texts.error}</div>
        <div>{this.state.error}</div>
        <Button onClick={this.resetError}>{Texts.resetButton}</Button>
      </Template>
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
