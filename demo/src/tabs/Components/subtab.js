import React from 'react';


const SubTab = ({ ctas }) => {
    const [cta1, cta2] = ctas;
    return <div>
        <button>{cta1}</button>
        <button>{cta2}</button>
    </div>
};

export default SubTab;