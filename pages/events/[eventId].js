import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import { getEventById } from '../../dammyData';
import EventSummary from '../../component/event-detail/event-summary';
import EventLogistics from '../../component/event-detail/event-logistics';
import EventContent from '../../component/event-detail/event-content';

const EventDetails = () => {
    const router = useRouter();
    const eventId  = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No Event Here..</p>
    }


    return (
        <Fragment>
            <EventSummary title ={event.title}></EventSummary>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    );
};

export default EventDetails;