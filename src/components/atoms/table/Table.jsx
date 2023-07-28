import React from 'react';
import { Table } from 'react-bootstrap';

export default function TablaInvolucradas(props){
  const {title, actions} = props
  return (
    <div>
      <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 1 }}>
        <h6>Entidades Nacionales Involucradas</h6>
      </div>
      <Table responsive hover>
        <thead>
          <tr>
            <th>{title}</th>
            <th>{actions}</th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td></td>
              <td></td>
            </tr>
         
        </tbody>
      </Table>
    </div>
  );
};
