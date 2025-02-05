import React from 'react'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserPost from '../pages/UserPost';
import UserTodo from '../pages/UserTodo';
import UserAlbum from '../pages/UserAlbum';


interface UserTabsProps {
    postLink: string;
    albumsLink: string;
    todoLink: string;
}

function Usertabs({ postLink, albumsLink, todoLink }: UserTabsProps) {
    return (
        <Tabs
            defaultActiveKey={postLink}
            id="uncontrolled-tab-example"
            className="mb-3, 1875rem"
        >
            <Tab eventKey={postLink} title="Post">
                <UserPost />
            </Tab>
            <Tab eventKey={albumsLink} title="Album">
                <UserAlbum />
            </Tab>
            <Tab eventKey={todoLink} title="Todo">
                <UserTodo />
            </Tab>
        </Tabs>
    )
}

export default Usertabs