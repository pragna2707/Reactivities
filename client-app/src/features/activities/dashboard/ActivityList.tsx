import { Button, Nav } from 'react-bootstrap';
import { SyntheticEvent, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';

export default observer(function ActivityList() {
    
    const {activityStore} = useStore();
    const{deleteActivity, activitiesByDate, loading} = activityStore;

    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id);
    }

    return (
        <div className="card">
            <div className="card-body">
                {activitiesByDate.map((activity) => (
                    <div key={activity.id} className="mb-4 pb-3 border-bottom">
                        <h5 className="card-title">{activity.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{activity.date}</h6>
                        <p className="card-text">{activity.description}</p>
                        <p className="card-text">{activity.city}, {activity.venue}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-secondary">{activity.category}</span>
                            <div className="d-flex">
                                <Button
                                    name={activity.id}
                                    variant="danger"
                                    className="me-2"
                                    onClick={(e) => handleActivityDelete(e, activity.id)}
                                    disabled={loading && target === activity.id}
                                >
                                    {loading && target === activity.id ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" 
                                                role="status" aria-hidden="true"></span>
                                            Deleting...
                                        </>
                                    ) : (
                                        'Delete'
                                    )}
                                </Button>
                                <Nav.Link as={Link} to={`/activities/${activity.id}`}>
                                    <Button variant="primary" >
                                        View
                                    </Button>
                                </Nav.Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

})
