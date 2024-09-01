import React from 'react';
import { useEffect } from 'react';

export const TaskAlert = ({message, setshowAlert}) => {

    useEffect(() => {
        setTimeout(() => {
            setshowAlert(false)
        }, 1000);
    }, []);
    
    return (
        <div>
            {alert(message)}
        </div>
    );
}


