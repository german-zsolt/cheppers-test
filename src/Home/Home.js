import { Button, Stack } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Texts = {
  header: "Welcome to the Trivia Challenge",
  body: "You will be presented with 10 True or False questions.",
  footer: "Can you score 100%?",
  startButton: "BEGIN",
};

const Home = () => (
  <Stack gap={5} className="col-md-5 mx-auto">
    <h1>{Texts.header}</h1>
    <h2>{Texts.body}</h2>
    <h2>{Texts.footer}</h2>
    <LinkContainer to="quiz">
      <Button variant="primary" size="lg">
        {Texts.startButton}
      </Button>
    </LinkContainer>
  </Stack>
);

export default Home;
