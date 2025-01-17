import { Col, Container, Row } from 'react-bootstrap'
import ActivityList from './ActivityList';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import ActivityFilters from './ActivityFilters';


export default observer(function ActivityDashboard() {

    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore;

    useEffect(() => {
      if (activityRegistry.size <= 1) loadActivities();
    }, [activityRegistry.size, loadActivities])
  
    if (activityStore.loadingInitial) return <LoadingComponent content='Loading app'/>

    return (
        <>
        <Container>
            <Row>
            <Col md="8">
                <ActivityList />
            </Col>
            <Col md="4">
                <ActivityFilters/>
            </Col>
            </Row>
        </Container>
        </>
    )
})
