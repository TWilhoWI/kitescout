import React, { useState, useEffect } from 'react';


export const TimeCounter = ({ lastFetch }) => {
    const [updStatus, setUpdStatus] = useState(new Date());

    useEffect(async () => {
        const interval = setInterval(async () => {
            setUpdStatus(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <span style={{ fontSize: "1.5vmin" }}>[{new Date(updStatus.getTime() - new Date(lastFetch.current).getTime()).getMinutes()}m:{new Date(updStatus.getTime() - new Date(lastFetch.current)).getSeconds()}s]</span>
    )
}