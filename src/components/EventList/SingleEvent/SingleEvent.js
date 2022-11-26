import './SingleEvent.scss';

function SingleEvent(props) {
    return (
        <div className="event">
            <h3>{props.event.id}</h3>
            <p>{props.event.eventName}</p>
            <p>{props.event.eventStartDate}</p>
            <p>{props.event.eventEndDate}</p>
            <p>{props.event.participantsCount} / {props.event.eventCapacity} </p>
        </div>
    );
}

export default SingleEvent;