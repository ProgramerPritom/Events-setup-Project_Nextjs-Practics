import React from 'react';
import EventList from '../component/events/EventList';
import { getFeaturedEvents } from '../dammyData';

const index = () => {
  const featuredEvents = getFeaturedEvents();
  // console.log(featuredEvents);
  return (
    <div>
      <EventList items={featuredEvents}></EventList>
    </div>
  );
};

export default index;