// import React from 'react'
// import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, ListGroupItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Activity } from '../../../app/models/activity';


interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({ activities, selectActivity, deleteActivity }: Props) {
    return (
        <div className="card">
            <div className="card-body">
                {activities.map((activity) => (
                    <div key={activity.id} className="mb-4 pb-3 border-bottom">
                        <h5 className="card-title">{activity.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{activity.date}</h6>
                        <p className="card-text">{activity.description}</p>
                        <p className="card-text">{activity.city}, {activity.venue}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-secondary">{activity.category}</span>
                            <div>
                                <Button
                                    variant="danger"
                                    className="me-2"
                                    onClick={() => deleteActivity(activity.id)}
                                >
                                    Delete
                                </Button>
                                <Button variant="primary"
                                    onClick={() => selectActivity(activity.id)}
                                >
                                    View
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}
