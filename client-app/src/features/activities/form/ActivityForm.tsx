// import React from 'react'
import { Button, Form } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({ activity: selectedActivity, closeForm, createOrEdit, submitting }: Props) {

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
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        createOrEdit(activity);
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
                    disabled={submitting}
                >
                    {submitting ? (
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
}
