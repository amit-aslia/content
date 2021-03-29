import React from 'react';


const Tabs = ({setTab}) => {
    return <div>
        <button onClick={() => setTab('Departure')}>Departure</button>
        <button onClick={() => setTab('Return')}>Return</button>
    </div>
};

export default Tabs;