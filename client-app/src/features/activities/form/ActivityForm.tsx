import { Button, Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import { Header } from "semantic-ui-react";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryOptions } from "../../../app/common/options/categoryOptions";
import 'react-datepicker/dist/react-datepicker.css'
import MyDateInput from "../../../app/common/form/MyDateInput";

export default observer(function ActivityForm() {
    const { activityStore } = useStore();
    const { createActivity, updateActivity,
        loading, loadActivity, loadingInitial } = activityStore;
    const { id } = useParams();
    const navigate = useNavigate();

    const [activity, setActivity] = useState<Activity>({
        id: '',
        title: '',
        category: '',
        description: '',
        date: null,
        city: '',
        venue: ''
    });

    const validationSchema = Yup.object({
        title: Yup.string().required('The activity title is required'),
        description: Yup.string().required('The activity description is required'),
        category: Yup.string().required(),
        date: Yup.string().required('Date is required'),
        venue: Yup.string().required(),
        city: Yup.string().required(),
    })

    useEffect(() => {
        if (id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity]);

    async function handleFormSubmit(activity: Activity) {
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

    if (loadingInitial) return <LoadingComponent content="Loading activity..." />

    return (
        <div className="card p-3 clearfix">
            <Header content='Activity Details' sub color="teal"/>
            <Formik 
                validationSchema={validationSchema}
                enableReinitialize 
                initialValues={activity} 
                onSubmit={values => handleFormSubmit(values)}>
                {({ handleSubmit, isValid, isSubmitting, dirty }) => (
                    <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
                        <MyTextInput name="title" placeholder="Title"/>                        
                        <MyTextArea rows={3} placeholder="Description" name="description" />
                        <MySelectInput options={categoryOptions} placeholder="Category" name="category" />
                        <MyDateInput placeholder="Date" name="date" />
                        <Header content='Location Details' sub color="teal"/>
                        <MyTextInput placeholder="City" name="city" />
                        <MyTextInput placeholder="Venue" name="venue" />
                        <Button
                            type="submit"
                            className="btn btn-success float-end"
                            disabled={isSubmitting || !dirty || !isValid}
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
                )}
            </Formik>
        </div>
    )
})
