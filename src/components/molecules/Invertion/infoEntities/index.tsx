import { Col, Nav, Row, Tab } from "react-bootstrap";
import TypeCoverage from "./TypeCoverage";
import DependencyInvolved from "./DependencyInvolved";
import NationalInvolved from "./NationalInvolved";

const Entities = () => {

    return (
        <div className="row">
            <div className="col-lg-12">
                <h4>Entidades <span className="text-red">*</span></h4>
            </div>
            <div className="col-lg-12">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className="mt-3">
                        <Col sm={4}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className="mb-2">
                                    <Nav.Link eventKey="first">Nacional(es) Involucrada(s)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2">
                                    <Nav.Link eventKey="second">Dependencias involucradas</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="mb-2">
                                    <Nav.Link eventKey="third">Tipo de cobertura</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <NationalInvolved />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <DependencyInvolved />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <TypeCoverage />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    );

}

export default Entities;