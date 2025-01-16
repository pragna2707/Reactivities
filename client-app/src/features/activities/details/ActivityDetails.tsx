import { Button, Card, Nav } from "react-bootstrap";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

export default observer(function ActivityDetails() {

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial } = activityStore;
    const {id} = useParams();

    useEffect(() => {
        if (id) loadActivity(id);
    }, [id, loadActivity])

    if (loadingInitial || !activity) return <LoadingComponent/>;

    return (
        <Card className="w-100" >
            <Card.Img variant="top" src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Body>
                <Card.Title>{activity.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{activity.date}</Card.Subtitle>
                <Card.Text>{activity.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                    <Nav.Link as={Link} to={`/manage/${activity.id}`}>
                    <Button variant="outline-primary" className="w-100">Edit</Button>
                    </Nav.Link>
                    <Nav.Link as={Link} to='/activities'>
                    <Button variant="outline-secondary" className="w-100">Cancel</Button>
                    </Nav.Link>
                </div>
            </Card.Footer>
        </Card>

    )
})
