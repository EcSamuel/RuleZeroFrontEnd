import React from 'react'
import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import GamesList from "../Games/GamesList";
import EventsList from "../Events/EventsList";

function ProfilePage(props) {
    return (
        <Container className='justify-content-center'>
            <Connections/>
            <EventCalendar/>
            <GamesList/>
        </Container>
    )
}

export default ProfilePage;