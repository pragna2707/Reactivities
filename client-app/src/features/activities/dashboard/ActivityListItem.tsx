import { Button, Card, Image, ListGroup, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import { FaClock, FaMapMarker } from "react-icons/fa";
import { format } from "date-fns";

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {    
    return (
        <Card className="mb-3">
            <Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <div className="d-flex align-items-center mb-3">
                            <Image
                                src='/assets/user.png'
                                roundedCircle
                                width={50}
                                height={50}
                                className="me-3"
                            />
                            <div>
                                <Card.Title>{activity.title}</Card.Title>
                                <Card.Subtitle className="text-muted">Hosted by Bob</Card.Subtitle>
                            </div>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className="mb-3">
                            <span className="me-3">
                                <FaClock className="me-1" /> {format(activity.date!, 'dd MMM yyyy h:mm aa')}
                            </span>
                            <span>
                                <FaMapMarker className="me-1" /> {activity.venue}
                            </span>
                        </div>
                    </ListGroup.Item>
                    <ListGroup.Item style={{ backgroundColor: '#eaeaea' }}>
                        <Card.Text className="text-muted mb-3">
                            Attendees go here
                        </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Text className="mb-0">{activity.description}</Card.Text>
                            <Nav.Link 
                                as={Link}
                                to={`/activities/${activity.id}`}>
                                <Button
                                    style={{
                                        backgroundColor: 'teal',
                                        borderColor: 'teal',
                                        color: 'white'
                                    }}
                                >
                                    View
                                </Button>
                            </Nav.Link>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
