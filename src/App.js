import { Col, Container, Row } from 'reactstrap';
import Todos from './components/todos/index';

function App() {
    return (
        <Container className="my-3">
            <Row>
                <Col>
                    <Todos />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
