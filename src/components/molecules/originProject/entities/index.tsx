import { Col, Nav, Row, Tab, Table } from "react-bootstrap";
import CheckBox from "../../../atoms/check/Check";

const Entities = () => {

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="mt-3">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item className="mb-2">
                                <Nav.Link eventKey="first">Entidad(es) Nacional(es) Involucrada(s)</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-2">
                                <Nav.Link eventKey="second">Dependencias involucradas</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-2">
                                <Nav.Link eventKey="third">Tipo de cobertura</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Table className="table table-bordered table-condensed table-stripe">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Table className="table table-bordered table-condensed table-stripe">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <CheckBox label="Nacional" type="checkbox" className="mr-3 mt-3 mb-3" />
                                <CheckBox label="Focalizada" type="checkbox" className="mr-3 mt-3 mb-3" />
                                <Table className="table table-bordered table-condensed table-stripe">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Departamentos</th>
                                            <th className="text-center">Municipios</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );

}

export default Entities;