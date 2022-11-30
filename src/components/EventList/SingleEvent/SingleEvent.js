import './SingleEvent.scss';
import {AiOutlineDelete,AiOutlineEdit} from 'react-icons/ai';
import axios from "axios";
import {MainContext,useContext} from "../../../context";
import {Link} from "react-router-dom";

function SingleEvent(props) {

    const {getEvents} = useContext(MainContext);

    const deleteEvent = () => {
        axios.delete(`http://localhost:8080/events/${props.event.id}`)
            .then(response => {
                console.log(response);
                getEvents();
            });
    }



    return (
        <div className="event">
            <h3>{props.event.eventName}</h3>
            <p>{props.event.eventStartDate}</p>
            <p>{props.event.eventEndDate}</p>
            <p>{props.event.participantsCount} / {props.event.eventCapacity} </p>
            <div className="event-edit">
                <Link to={`/edit/${props.event.id}`}><AiOutlineEdit size="24px"/></Link>
            </div>
            <AiOutlineDelete size="24px" onClick={deleteEvent}/>
        </div>
    );
}

export default SingleEvent;