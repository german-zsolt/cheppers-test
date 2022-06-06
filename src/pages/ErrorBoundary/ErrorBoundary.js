import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetError, setError } from "../../reducers/errorSlice";
import Template from "../Template";
import { Button } from "react-bootstrap";

const Texts = {
  header: "Something went wrong.",
  error: "Error message:",
  resetButton: "Try again",
};

class ErrorBoundary extends Component {
  componentDidCatch(error, errorInfo) {
    this.props.setError({ error, errorInfo });
  }

  render() {
    const { children, hasError, error, errorInfo } = this.props;
    if (!hasError) return children;
    return (
      <Template>
        <h1>{Texts.header}</h1>
        <div>{Texts.error}</div>
        <div>{error}</div>
        {errorInfo && <div>{errorInfo}</div>}
        <Button onClick={resetError}>{Texts.resetButton}</Button>
      </Template>
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
  hasError: PropTypes.bool,
  error: PropTypes.node,
  errorInfo: PropTypes.node,
  resetError: PropTypes.func,
  setError: PropTypes.func,
};

export default connect(
  ({ error: { hasError, error, errorInfo } }) => ({
    hasError,
    error,
    errorInfo,
  }),
  { resetError, setError }
)(ErrorBoundary);
