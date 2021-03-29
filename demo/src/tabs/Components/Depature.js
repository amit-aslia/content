import React from 'react';


const Depart = ({ name }) => {
    const log = cta => console.log(cta);
    return <div>
        <div onClick={() => log('button1')}>Hello
            <div onClick={() => log('button2')}>
                <div onClick={() => log('button3')}></div>
            </div>
        </div>
    </div>
};

export default Depart;