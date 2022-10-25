import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import EventList from '../component/events/EventList';
import EventSearch from '../component/events/EventSearch';
import { getFeaturedEvents } from '../dammyData';

const Index = () => {
  const router = useRouter();
  const featuredEvents = getFeaturedEvents();
  // console.log(featuredEvents);
  

  const findEventHandler = (year,month) =>{

    const fullPath = `/events/${year}/${month}`;


    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler}></EventSearch>
      <EventList items={featuredEvents}></EventList>
    </Fragment>
  );
};

export default Index;