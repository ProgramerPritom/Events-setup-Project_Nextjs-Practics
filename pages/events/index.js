import React from 'react';
import EventList from '../../component/events/EventList';
import { getAllEvents } from '../../dammyData';

const events = () => {
    const events = getAllEvents();
    return (
        <div>
            <EventList items={events}></EventList>
        </div>
    );
};

export default events;