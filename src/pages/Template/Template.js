import PropTypes from "prop-types";
import classnames from "classnames";
import { Stack } from "react-bootstrap";

const Template = ({ children, className, ...restProps }) => (
  <Stack
    gap={2}
    {...restProps}
    className={classnames("col-md-5 mx-auto text-center", className)}
  >
    {children}
  </Stack>
);
Template.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Template;
