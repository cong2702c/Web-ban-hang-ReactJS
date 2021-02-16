import React from "react";
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs';
import TabInfor from "./TabInfor";


function Tab() {
    return(
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{width: '870px'}}>
            <Tab eventKey="home" title="DESCRIPTION">
                <div>
                    <TabInfor />
                </div>
            </Tab>
            <Tab eventKey="profile" title="INFORMATION">
                <div>
                    <h1>abc</h1>
                </div>
            </Tab>
            <Tab eventKey="contact" title="REVIEWS">
                <div>
                    <p style={{border: '2px solid #BDBDBD'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus</p>
                </div>
            </Tab>
        </Tabs>
    );
}

export default Tab;