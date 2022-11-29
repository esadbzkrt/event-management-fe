import './AddEvent.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import axios from "axios";

function AddEvent(props) {
    const [eventName, setEventName] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [eventParticipant, setEventParticipant] = useState(0);
    const [eventCapacity, setEventCapacity] = useState(0);

    useEffect(() => {
            console.log(startDate);

        }
        , [startDate]);

    const addEvent = () => {
        axios.post('http://localhost:8080/events', {
            eventName: eventName,
            eventStartDate: startDate,
            eventEndDate: endDate,
            participantsCount: eventParticipant,
            eventCapacity: eventCapacity
        })
            .then(response => {
                    console.log(response.data);
                }
            );
    }


    return (
        <div className="add-event">
            <h3> Add Event </h3>
            <div className="add-event-entity">
                <h3>Event Name:</h3>
                <input className="add-event-input" type="text" placeholder="Enter event name" value={eventName}
                       onChange={e => setEventName(e.target.value)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event Start Date:</h3>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event End Date:</h3>
                <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event Participant:</h3>
                <input className="add-event-input" type="tel" placeholder="Enter Participant Number:" value={eventParticipant}
                       onChange={e => setEventParticipant(e.target.value)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event Capacity</h3>
                <input className="add-event-input" type="tel" placeholder="Enter event name" value={eventCapacity}
                       onChange={e => setEventCapacity(e.target.value)}/>
            </div>
            <div className="add-event-button">
                <button onClick={addEvent}>Add Event</button>
            </div>
        </div>
    );
}

export default AddEvent;