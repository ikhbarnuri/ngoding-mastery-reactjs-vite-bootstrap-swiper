import FaqComponent from "../components/FaqComponent.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {dataSwiper, testimonial} from "../data/index.js";
import {SwiperSlide} from "swiper/react";

const TestimonialPage = () => {
    return (
        <>
            <section className="testimonial-page">
                <Container>
                    <Row className="mb-5">
                        <Col>
                            <h1 className="text-center fw-bold">Semua Testimonial</h1>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, tempora?
                            </p>
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-3 row-cols-1">
                        {testimonial.map(data => (
                            <Col key={data.id} className="mb-5">
                                <p className="desc shadow-sm">{data.desc}</p>
                                <div className="people">
                                    <img src={data.image} alt=""/>
                                    <div className="">
                                        <h5 className="mb-1">{data.name}</h5>
                                        <p className="m-0 fw-bold">{data.skill}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <FaqComponent/>
        </>
    );
};

export default TestimonialPage;