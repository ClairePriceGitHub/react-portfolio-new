import React from 'react';
import { useLocation } from "react-router-dom";

function projectSelected() {

    const location = useLocation();
    const data = location.state;

    return (
        <div>
            <p>{data.title}</p>
        </div>
    );
}

export default projectSelected;