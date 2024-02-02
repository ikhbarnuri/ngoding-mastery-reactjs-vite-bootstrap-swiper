import {Accordion, Col, Container, Row} from "react-bootstrap";

import {faq} from "../data/index.js";

const FaqComponent = () => {
    return (
        <div className="faq">
            <Container>
                <Row>
                    <Col>
                        <h2 className="text-center fw-bold">Pertanyaan yang sering ditanyakan</h2>
                    </Col>
                </Row>
                <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
                    {faq.map((data) => (
                        <Col key={data.id}>
                            <Accordion className="shadow-sm" defaultActiveKey="1">
                                <Accordion.Item eventKey={data.eventKey}>
                                    <Accordion.Header>{data.title}</Accordion.Header>
                                    <Accordion.Body>{data.desc}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default FaqComponent;