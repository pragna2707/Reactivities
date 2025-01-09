// import React from 'react'
import { Button, Card } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
}

export default function ActivityDetails({ activity, cancelSelectActivity, openForm }: Props) {
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
                    <Button onClick={() => openForm(activity.id)} variant="outline-primary" className="w-100">Edit</Button>
                    <Button onClick={cancelSelectActivity} variant="outline-secondary" className="w-100">Cancel</Button>
                </div>
            </Card.Footer>
        </Card>

    )
}