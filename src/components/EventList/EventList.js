import './EventList.scss'
import SingleEvent from "./SingleEvent/SingleEvent";
import {IoMdAddCircleOutline} from 'react-icons/io';
import {useEffect, useState} from "react";
import axios from "axios";
import {MainContext} from "../../context";
import {Link} from "react-router-dom";


function EventList() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvents();
    }, [events]);

    const getEvents = () => {
        axios.get('http://localhost:8080/events')
            .then(response => {
                    setEvents(response.data);
                }
            );
    }

    const data = {
        events,
        setEvents,
        getEvents
    };

    return (
        <MainContext.Provider value={data}>
            <div className="event-list">
                <div className="event-list-header">
                    <h3>Event List</h3>
                    <div className="event-list-add">
                        <Link to={`/add`}>
                            <IoMdAddCircleOutline size="24px"/>
                        </Link>
                    </div>
                </div>
                {events.map(event => <SingleEvent key={event.id} event={event}/>)}
            </div>
        </MainContext.Provider>
    );
}

export default EventList;