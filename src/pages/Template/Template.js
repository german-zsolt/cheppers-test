import PropTypes from "prop-types";
import { Stack } from "react-bootstrap";

const Template = ({ children }) => (
  <Stack gap={5} className="col-md-5 mx-auto">
    {children}
  </Stack>
);
Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
