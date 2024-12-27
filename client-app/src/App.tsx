import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Card, ListGroup } from 'react-bootstrap';
import { People } from 'react-bootstrap-icons';
// import { ListGroup } from 'react-bootstrap/ListGroup';


function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data)
      })
  }, [])

  return (
    <div> 
    <Card.Header as="h2">
      <People className="Reactivities" />
      Reactivities
    </Card.Header>
    <ListGroup>
      {activities.map((activity: any) => (
        <ListGroup.Item key={activity.id}>
          {activity.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
    </div>
  )
}

export default App
