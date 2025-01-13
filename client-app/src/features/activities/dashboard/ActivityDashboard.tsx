// import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {selectedActivity, editMode} = activityStore;

    return (
        <>
        <Container>
            <Row>
            <Col md="8">
                <ActivityList />
            </Col>
            <Col md="4">
                {selectedActivity && !editMode &&
                <ActivityDetails />}
                {editMode &&
                <ActivityForm />}
            </Col>
            </Row>
        </Container>
        </>
    )
})
