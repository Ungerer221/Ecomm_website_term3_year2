import React from "react"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
// import './acordian.css'

import Accordion from 'react-bootstrap/Accordion';

const acordian = () => {
    return (
        <div className='accordian-con'>
            {/* <MDBAccordion initialActive={1}>
                <MDBAccordionItem collapseId={1} headerTitle='Accordion Item #1'>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle='Accordion Item #2'>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={3} headerTitle='Accordion Item #3'>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                </MDBAccordionItem>
            </MDBAccordion> */}


            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
export default acordian