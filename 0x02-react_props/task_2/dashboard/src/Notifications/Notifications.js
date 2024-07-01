import React from 'react';
import './notifications.css';
import { getLatestNotification } from './utils';
import NotificationItem from './NotificationItem'

export default function Notifications() {

    const handleButtonClick = () => {
        console.log('Close button has been clicked');
    }   

    return (
        <>
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <button 
                    type="button"
                    style={{ float: "right", cursor: "pointer", right: "0px", top: "-40px", position: "relative", background: "none", border: "none"}}
                    aria-label="Close"
                    onClick={handleButtonClick} >
                <img src="./close-icon.png" alt='close-icon' />
            </button>

                <ul>
                    <NotificationItem />
                    <NotificationItem />
                </ul>
         </div>
        </>
    )
}