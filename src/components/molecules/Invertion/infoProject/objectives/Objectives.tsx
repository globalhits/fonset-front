import React from "react";

import './index.scss'
import { Accordion } from "react-bootstrap";
import { GeneralObjective } from "../generalObjective/GeneralObjective";
import { GeneralSpecific } from "../generalSpecific/GeneralSpecific";


interface ObjetivesInterface {
    type?: string
}
export default function Objectives({ type }: ObjetivesInterface) {

    return (
        <Accordion defaultActiveKey="0" className="mt-5 mb-4">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Objectivo General</Accordion.Header>
                <Accordion.Body>
                    <GeneralObjective type={type} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Objetivos Especificos</Accordion.Header>
                <Accordion.Body>
                    <GeneralSpecific type={type} />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}