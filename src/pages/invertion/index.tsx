import React from 'react';
import Layout from "../../components/templates/adminLte/index";
import FormInvertion from '../../components/organisms/formInvertion/index';

import "./index.scss";

const InvertionView = () => {
    return (
        <>
            <Layout>
                <FormInvertion />
            </Layout>
        </>
    )
}

export default InvertionView;