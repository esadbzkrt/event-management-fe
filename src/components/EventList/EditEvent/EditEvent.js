import './EditEvent.scss'
import "react-datepicker/dist/react-datepicker.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function EditEvent() {

    const {id} = useParams();
    const [eventName, setEventName] = useState("");
    const [eventStartDate, setEventStartDate] = useState("");
    const [eventEndDate, setEventEndDate] = useState("");
    const [participantsCount, setParticipantsCount] = useState(0);
    const [eventCapacity, setEventCapacity] = useState(0);


    const getEvent = () => {
        axios.get(`http://localhost:8080/events/${id}`)
            .then(response => {
                console.log(response);
                setEventName(response.data.eventName);
                setEventStartDate(response.data.eventStartDate);
                setEventEndDate(response.data.eventEndDate);
                setParticipantsCount(response.data.participantsCount);
                setEventCapacity(response.data.eventCapacity);
            });
    }


    function updateEvent() {
        axios.put('http://localhost:8080/events/' + id, {
            eventName: eventName,
            eventStartDate: eventStartDate,
            eventEndDate: eventEndDate,
            participantsCount: participantsCount,
            eventCapacity: eventCapacity
        })
            .then(response => {
                    if (response.status === 200) {
                        alert("Event updated successfully");
                    }
                    else {
                        alert("Error");
                    }
                }
            );
    }

    useEffect(() => {
            getEvent();
        }
        , [id]);

    return (
        <div className="edit-event">
            <h3> Edit Event </h3>
            <div className="edit-event-entity">
                <div className="edit-event-entity-name">
                    <h3>Event Name:</h3>
                </div>
                <input className="edit-event-input" type="text" placeholder="Enter event name" value={eventName || ""}
                       onChange={e => setEventName(e.target.value)}/>
            </div>
            <div className="edit-event-entity">
                <h3>Event Start Date:</h3>
                <input className="edit-event-input" type="text" placeholder="Start Date DD/MM/YYY"
                       value={eventStartDate || ""}
                       onChange={e => setEventStartDate(e.target.value)}/>
            </div>
            <div className="edit-event-entity">
                <h3>Event End Date:</h3>
                <input className="edit-event-input" type="text" placeholder="End Date DD/MM/YYY"
                       value={eventEndDate || ""}
                       onChange={e => setEventEndDate(e.target.value)}/>
            </div>
            <div className="edit-event-entity">
                <h3>Event Participant:</h3>
                <input className="edit-event-input" type="number" placeholder="Enter Participant Number:"
                       value={participantsCount || ""}
                       onChange={e => setParticipantsCount(e.target.valueAsNumber)}/>
            </div>
            <div className="edit-event-entity">
                <h3>Event Capacity</h3>
                <input className="add-event-input" type="number" placeholder="Enter event name"
                       value={eventCapacity || ""}
                       onChange={e => setEventCapacity(e.target.valueAsNumber)}/>
            </div>
            <div className="edit-event-button">
                <Link to={`/`}>
                    <button onClick={updateEvent} disabled={!eventName || !eventCapacity || !participantsCount || !eventStartDate || !eventEndDate }>Update Event</button>
                </Link>
            </div>
        </div>
    );
}

export default EditEvent;