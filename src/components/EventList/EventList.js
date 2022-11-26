import './EventList.scss'
import SingleEvent from "./SingleEvent/SingleEvent";
import {IoMdAddCircleOutline} from 'react-icons/io';
import {useEffect, useState} from "react";
import axios from "axios";

function EventList() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents();
    }, []);


    const getEvents = () => {
        axios.get('http://localhost:8080/events')
            .then(response => {
                setEvents(response.data);
                console.log(response.data);
            }
        );
    }


    return (
        <div className="event-list">
            <div className="event-list-header">
                <h3>Event List</h3>
                <IoMdAddCircleOutline size="24px"/>
            </div>
            <div className="event-list-header">
                <h3>Event Id</h3>
                <p>Event Name</p>
                <p>Event Start Date</p>
                <p>Event End Date</p>
                <p>Event Capacity</p>
            </div>
            {events.map(event => <SingleEvent key={event.id} event={event}/>)}

        </div>
    );
}

export default EventList;