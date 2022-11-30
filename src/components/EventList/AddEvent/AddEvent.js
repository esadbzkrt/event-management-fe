import './AddEvent.scss'
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function AddEvent() {

    const [eventName, setEventName] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [participantsCount, setParticipantsCount] = useState(0);
    const [eventCapacity, setEventCapacity] = useState(0);

    const addEvent = () => {
        axios.post('http://localhost:8080/events', {
            eventName: eventName,
            eventStartDate: eventStartDate,
            eventEndDate: eventEndDate,
            participantsCount: participantsCount,
            eventCapacity: eventCapacity
        })
            .then(response => {
                    if (response.status === 200) {
                        alert("Event added successfully");
                    }
                    else {
                        alert("Error");
                    }
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
                <input className="add-event-input" type="text" placeholder="Start Date DD/MM/YYY"
                       value={eventStartDate || ""}
                       onChange={e => setEventStartDate(e.target.value)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event End Date:</h3>
                <input className="add-event-input" type="text" placeholder="Start Date DD/MM/YYY"
                       value={eventEndDate || ""}
                       onChange={e => setEventEndDate(e.target.value)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event Participant:</h3>
                <input className="add-event-input" type="number" placeholder="Enter Participant Number:"
                       value={participantsCount || ""}
                       onChange={e => setParticipantsCount(e.target.valueAsNumber)}/>
            </div>
            <div className="add-event-entity">
                <h3>Event Capacity</h3>
                <input className="add-event-input" type="number" placeholder="Enter event name"
                       value={eventCapacity || ""}
                       onChange={e => setEventCapacity(e.target.valueAsNumber)}/>
            </div>
            <div className="add-event-button">
                <Link to={`/`}>
                    <button onClick={addEvent} disabled={!eventName || !eventCapacity || !participantsCount || !eventStartDate || !eventEndDate }>Add Event</button>
                </Link>
            </div>
        </div>
    );
}

export default AddEvent;