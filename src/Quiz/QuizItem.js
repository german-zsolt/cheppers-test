import PropTypes from 'prop-types';
import {Button, Card, Stack} from 'react-bootstrap';

const Texts = {
    true: 'True',
    false: 'False'
}

const QuizItem = ({ category, question, handleAnswer }) => {
    return <Stack gap={5} className="col-md-5 mx-auto">
        <h1>{category}</h1>
        <Card>
            <Card.Body>
                <Card.Text>
                    {question}
                </Card.Text>
            </Card.Body>
        </Card>
        <Button variant="success" onClick={() => handleAnswer(true)}>{Texts.true}</Button>
        <Button variant="danger" onClick={() => handleAnswer(false)}>{Texts.false}</Button>
    </Stack>;
}
QuizItem.propTypes = {
    category: PropTypes.string,
    question: PropTypes.string,
    handleAnswer: PropTypes.func,
}

export default QuizItem;