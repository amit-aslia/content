import React, { useState } from 'react';
import Tabs from './tabs';
import Departure from './Components/Depature';
import Return from './Components/return';
import SubTab from './Components/subtab'

const Common = () => {
    
    const [currentTab, setTab] = useState('Departure')
    const getYourComponents = (currentTab, cta) => {
        switch(currentTab) {
            case 'Departure': {
              return cta === 'ctas' ? ['delhi', 'mumbai'] : <Departure />;
            }
            case 'Return': {
                return cta === 'ctas' ? ['newyork', 'usa'] : <Return name={'amit'} />
            }
            default: {
              return null;
            }
          }
    }

    return <div>
        <Tabs setTab={setTab} />
        <SubTab  ctas={getYourComponents(currentTab, 'ctas')} />
        {getYourComponents(currentTab, 'components')}
    </div>
};

export default Common;