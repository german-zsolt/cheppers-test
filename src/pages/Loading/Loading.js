import { Spinner } from "react-bootstrap";
import Template from "../Template";

const Loading = () => (
  <Template>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </Template>
);

export default Loading;
