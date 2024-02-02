import FaqComponent from "../components/FaqComponent.jsx";
import {Col, Container, Row} from "react-bootstrap";

const SyaratKetentuanPage = () => {
    return (
        <>
            <section className="syarat-ketentuan-page min-vh-100">
                <Container>
                    <Row>
                        <Col>
                            <h1 className="fw-bold text-center">Syarat & Ketentuan</h1>
                            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                    <Row autoCapitalize="pt-5">
                        <Col>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ducimus eveniet fuga
                                laborum maiores modi odit perferendis quod quos tenetur. Assumenda aut consequuntur
                                delectus doloremque ea est eum fuga, fugit harum impedit magni minima minus molestias
                                neque quia quisquam ratione sequi sint, vero voluptatem! Architecto consequatur debitis
                                officiis quidem tenetur.</p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <h4 className="fw-bold">1. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eligendi nam pariatur
                                similique. Animi blanditiis commodi cum ea harum nobis non, reiciendis unde? Adipisci
                                animi aperiam consequatur cupiditate ea eaque fugit, harum ipsa, itaque libero minima,
                                modi non praesentium suscipit!</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda dolor doloremque
                                dolores explicabo magnam. Ab alias, aliquid animi aut, cum dolorem doloremque dolores
                                eaque, eius enim error eum incidunt laboriosam laudantium maiores nulla odit sequi
                                similique tempora ut voluptatum?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere iure iusto
                                numquam obcaecati perspiciatis praesentium sequi tenetur vel! Accusantium adipisci
                                aperiam commodi cumque dicta dolore doloribus dolorum ex expedita facilis fugiat illo
                                illum incidunt ipsa iste iure laboriosam magni minima molestiae mollitia, neque nisi non
                                nulla odit, optio perferendis praesentium quae quisquam reiciendis rem repellat rerum
                                soluta sunt! Odit?</p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <h4 className="fw-bold">2. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium ad alias at
                                beatae corporis cupiditate eum impedit inventore ipsa, ipsam ipsum minima, mollitia
                                necessitatibus neque non obcaecati odio officia qui quos repellendus similique soluta
                                velit. Ab amet culpa cum deleniti dolorum eius error fuga ipsa iusto maiores molestiae
                                non officiis pariatur quibusdam quis rerum soluta ullam, velit veritatis vitae.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium esse et harum illum
                                mollitia nulla quisquam velit. Aliquid assumenda consectetur doloremque ducimus eaque
                                enim exercitationem facilis fugit modi, molestiae nemo nesciunt, odio officia optio
                                possimus provident quisquam recusandae saepe voluptatem voluptates! A adipisci dicta
                                ipsam maxime nihil omnis quibusdam, veniam voluptatum. A aliquid amet corporis culpa
                                eligendi enim eos fugit laboriosam maxime molestias, optio praesentium quam quasi
                                quibusdam quidem quod tenetur ullam vel veniam voluptate. Amet asperiores error
                                necessitatibus unde.</p>
                        </Col>
                    </Row>
                    <Row className="py-3">
                        <Col>
                            <h4 className="fw-bold">3. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias, aliquam consequuntur
                                enim excepturi ipsam molestias obcaecati officiis reiciendis sunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, dolore facilis nobis
                                odio provident recusandae rem? A beatae cupiditate dolorum error facilis fugiat iste nam
                                nulla pariatur qui quod recusandae repellendus sapiente, ullam veniam. A amet animi
                                architecto atque consequuntur dicta dolorem ducimus eos, error excepturi fugit harum
                                illo impedit laborum maiores molestias mollitia nam natus pariatur perspiciatis,
                                provident quaerat quam quod quos repellat sint vitae voluptatum! Asperiores dolores,
                                esse exercitationem impedit itaque laudantium libero nihil non quos repellat vitae.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cupiditate et
                                necessitatibus quibusdam voluptatum? Earum expedita facilis illum officiis ullam?
                                Accusamus assumenda aut cum dignissimos, excepturi fuga ipsa, itaque nemo quas quasi
                                quibusdam recusandae sint vel. Alias aperiam at dignissimos dolorem earum, facilis fugit
                                impedit incidunt itaque libero, minima nihil, nobis numquam placeat reiciendis
                                repudiandae tempora! Cumque delectus natus quas?</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <FaqComponent/>
        </>
    );
};

export default SyaratKetentuanPage;