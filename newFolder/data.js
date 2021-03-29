const data = {
  inclusions : {
    'meal_plan': {
      title: 'Meal Plan',
      icon: 'mealIcon',
      inclusions: [
        {
          id: 123,
          name: 'Breakfast',
          included: true
        },
        {
          id: 123,
          name: 'Dinner',
          included: true
        },
        {
          id: 123,
          name: 'Welcome drink on arrival',
          included: false
        }
      ]
    },
    'airport_transfer': {
      title: 'Airport Arrival',
      icon: 'airportIcon',
      inclusions: [
        {
          id: 123,
          name: 'Arrival',
          included: true
        },
        {
          id: 123,
          name: 'Departure',
          included: false
        },
        {
          id: 123,
          name: 'Welcome drink on arrival',
          included: true
        }
      ]
    },
    'cab_type': {
      title: 'Cab Type',
      icon: 'cabIcon',
      inclusions: [
        {
          id: 123,
          name: 'Src',
          included: true
        },
        {
          id: 123,
          name: 'Private',
          included: false
        },
      ]
    },
    'others': {
      title: 'Others',
      icon: 'othersIcon',
      inclusions: [{
        id: 123,
        name: 'Others Inclusion',
        included: true,
        details: ''
      }, {
        id: 123,
        name: 'Others Exclusion',
        included: false,
        details: ''
      }]
    },
    'extra': {
      title: null,
      icon: null,
      inclusions: [
        {
          id: 123,
          name: 'Air fare',
          included: true,
        },
        {
          id: 123,
          name: 'GST Included',
          included: true
        },
        {
          id: 123,
          name: 'Travel Insurance',
          included: true
        },
        {
          id: 123,
          name: 'Visa',
          included: true,
          details: ''
        }, {
          id: 123,
          name: 'Sightseeing',
          included: true,
          details: ''
        }, {
          id: 123,
          name: 'Honeymoon Freebles',
          included: true,
          details: ''
        },
        {
          id: 123,
          name: 'Extra Fees/ Extra Activities',
          included: true,
          details: ''
        }
      ]
    }
  }
};

module.exports = data;



newState = getNewState(state, draftState => {
  // console.log(draftState.data.inclusion)
  Object.values(draftState.data.inclusions).forEach(data => data.inclusions.forEach(inclusion => {
    console.log('Hello this is me outside if');
    if(inclusion[id] in payload) {
      console.log('Hello this is me');
      if(inclusion.details) inclusion.details = payload[id].details;
      if(inclusion.included) inclusion.included = payload[id].included;
    }
    return (
    {
      ...inclusion,
      check: `inclusion ${inclusion.id}`
    }
    );
  }));
});