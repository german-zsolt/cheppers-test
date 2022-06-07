import { Spinner } from "react-bootstrap";
import Template from "../Template";
import styles from "./Loading.module.scss";

const Texts = {
  loading: "Loading...",
};

const Loading = () => (
  <Template>
    <div className={styles.loading}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">{Texts.loading}</span>
      </Spinner>
    </div>
  </Template>
);

export default Loading;
