import Link from 'next/link';
import React from 'react';
import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href='/'>NextEvents</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                            <Link href='/events'>All Events</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default MainHeader;