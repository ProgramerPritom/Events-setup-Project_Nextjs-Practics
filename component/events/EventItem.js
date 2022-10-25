
import React from 'react';
import classes from './EventItem.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowIcon from '../icons/arrow-right-icon';

const EventItem = ({item}) => {
    const {title,image,date,location,id} = item;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ','\n');
    const ExploreLink = `/events/${id}`;
    return (
        
            <li className={classes.item}>
                <img src={'/'+ image} alt="" />
                <div className={classes.content}>
                    <div className={classes.summary}>
                        <h2>{title}</h2>
                        <div className={classes.date}>
                            <DateIcon></DateIcon>
                            <time>{humanReadableDate}</time>
                        </div>
                        <div className={classes.address}>
                            <AddressIcon></AddressIcon>
                            <address>{formattedAddress}</address>
                        </div>
                    </div>

                    <div className={classes.actions}>
                        
                        <Button link={ExploreLink}>
                            <span>Explore Event</span>
                            <span className={classes.icon}><ArrowIcon></ArrowIcon></span>
                            </Button>
                    </div>
                </div>
            </li>
        
    );
};

export default EventItem;