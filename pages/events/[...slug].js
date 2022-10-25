import { useRouter } from 'next/router';
import React, { Fragment } from 'react';
import EventList from '../../component/events/EventList';
import { getFilteredEvents } from '../../dammyData';
import ResultsTitle from '../../component/events/results-title';
import Button from '../../component/ui/Button';
import ErrorAlert from '../../component/ui/error-alert';

const FeatureEvent = () => {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className='center'>Loading....</p>
    }

        const filterYear = filterData[0];
        const filterMonth = filterData[1];

        const numYear = +filterYear;
        const numMonth = +filterMonth;
        console.log(numYear,numMonth);

        if (isNaN(numYear) || isNaN(numMonth) || numYear >2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
            return <Fragment>
                <ErrorAlert><p>Invalid filter. Please Try again</p></ErrorAlert>
                
                <div className="center">
                <Button link='/events'>See All Events</Button>
                </div>
            </Fragment>
        }

        const filteredEvents = getFilteredEvents({
            year: numYear,
            month: numMonth,
        });

        if (!filteredEvents || filteredEvents.length === 0) {
            return <Fragment>
                <ErrorAlert>
                <p>No Events found for the chosen filter!</p>
                </ErrorAlert>
                <div className="center">
                <Button link='/events'>See All Events</Button>
                </div>
            </Fragment>
        }
         
        const date = new Date(numYear , numMonth - 1);



    return (
        <Fragment>
            <ResultsTitle date={date}></ResultsTitle>
            <EventList items={filteredEvents}></EventList>
        </Fragment>
    );
};

export default FeatureEvent;