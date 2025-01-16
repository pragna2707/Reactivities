import { Button, Form, Nav } from "react-bootstrap";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {v4 as uuid} from "uuid";

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const{ createActivity, updateActivity, 
        loading, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    });

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            if (!activity.id) {
                activity.id = uuid();
                await createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
            } else {
                await updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
            }
        } catch (error) {
            console.error("Error submitting activity:", error);
        }
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

    if (loadingInitial) return <LoadingComponent content="Loading activity..."/>

    return (
        <div className="card p-3 clearfix">
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Control placeholder="Title" value={activity.title} name="title" onChange={handleInputChange} /><br />
                <Form.Control as="textarea" placeholder="Description" value={activity.description} name="description" onChange={handleInputChange} /><br />
                <Form.Control placeholder="Category" value={activity.category} name="category" onChange={handleInputChange} /><br />
                <Form.Control type="date" placeholder="Date" value={activity.date} name="date" onChange={handleInputChange} /><br />
                <Form.Control placeholder="City" value={activity.city} name="city" onChange={handleInputChange} /><br />
                <Form.Control placeholder="Venue" value={activity.venue} name="venue" onChange={handleInputChange} /><br />
                <Button
                    type="submit"
                    className="btn btn-success float-end"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Loading...
                        </>
                    ) : (
                        'Submit'
                    )}
                </Button>
                <Nav.Link as={Link} to='/activities'>
                    <Button type="submit" variant="secondary" className="btn float-end">Cancel</Button>
                </Nav.Link>
            </Form>
        </div>
    )
})
