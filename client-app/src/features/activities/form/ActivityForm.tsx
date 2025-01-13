// import React from 'react'
import { Button, Form } from "react-bootstrap";
import { ChangeEvent, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ActivityForm() {
    const {activityStore} = useStore();
    const{selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore;

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);

    // function handleSubmit() {
    //     createOrEdit(activity);
    // }
    function handleSubmit() {
        void(activity.id ? updateActivity(activity) : createActivity(activity));
    }


    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setActivity({ ...activity, [name]: value })
    }

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

                <Button onClick={closeForm} type="submit" variant="secondary" className="btn float-end">Cancel</Button>
            </Form>
        </div>
    )
})
