import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { resetError, setError } from "../../reducers/errorSlice";
import Template from "../Template";
import { Button } from "react-bootstrap";

const Texts = {
  header: "Something went wrong:",
  resetButton: "Try again",
};

class ErrorBoundary extends Component {
  componentDidCatch(error) {
    this.props.setError(error);
  }

  render() {
    const { children, hasError, error } = this.props;
    if (!hasError) return children;
    return (
      <Template>
        <h1>{Texts.header}</h1>
        <div>{error.message}</div>
        <Button onClick={this.props.resetError}>{Texts.resetButton}</Button>
      </Template>
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node,
  hasError: PropTypes.bool,
  error: PropTypes.any,
  resetError: PropTypes.func,
  setError: PropTypes.func,
};

export default connect(
  ({ error: { hasError, error } }) => ({ hasError, error }),
  { resetError, setError }
)(ErrorBoundary);
