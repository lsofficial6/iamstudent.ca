import React from 'react';
import { Accordion } from 'react-bootstrap';

const AccordionOne = (props) => {
  const targetId = `accordion-${props.id}`;

  return (
    <div className='border-bottom'>
      <div className='container'>
        <Accordion flush>
          <Accordion.Item eventKey={targetId}>
            <Accordion.Header>{props.qus}</Accordion.Header>
            <Accordion.Body>{props.ans}</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default AccordionOne;
