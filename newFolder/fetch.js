const checkNumberOfChildrenInRoom = (checkChildrenWithRooms, childrenCount, totalRoomCount ) => {
    return checkChildrenWithRooms  ? 
    childrenCount === 0 ? 
      0 
      : 
      1 
    : 
    Math.ceil(childrenCount / totalRoomCount);
  };
  
  const getEachChildAge = (childrenAge, childrenCount, childrenAgeCount) => {
    const eachChildAge = {};
    for(let i=1; i<= childrenCount; i++) {
      eachChildAge[`child_${childrenAgeCount}`] = childrenAge[`childAge_${childrenAgeCount}`];
      childrenAgeCount = childrenAgeCount + 1;
    }
    return eachChildAge;
  };
  
   const caculatedHotelsRooms = (adult_count, children_count, childrenAge) => {
  
    const rooms = {};
  
    const numberOfRooms = adult_count > 1 ? parseInt(adult_count / 2) : adult_count;
    let adultsCount = adult_count;
    let childrenCount = children_count;
    let totalRoomCount = numberOfRooms; 
    const checkChildrenWithRooms = children_count <= numberOfRooms;
    let childrenAgeCount = 1;
  
    let i = 1;
    while(i <= numberOfRooms) {
      if( i === numberOfRooms ) {
        rooms[`room_${i}`] = {
          adults: adultsCount,
          children: childrenCount,
          ...(childrenCount > 0 && childrenAgeCount && 
              { childrenAge: getEachChildAge(childrenAge, childrenCount, childrenAgeCount)})
        };
      } 
      else {
        rooms[`room_${i}`] = {
          adults: 2,
          children: checkNumberOfChildrenInRoom(checkChildrenWithRooms, childrenCount, totalRoomCount),
          ...(childrenCount > 0 && childrenAgeCount && 
              { childrenAge: getEachChildAge(childrenAge, checkNumberOfChildrenInRoom(checkChildrenWithRooms, childrenCount, totalRoomCount), childrenAgeCount)})
        };
      }
      // Conditioally increament
  
      if(childrenCount > 0) {
        childrenCount = checkChildrenWithRooms ? childrenCount - 1 : childrenCount - Math.ceil(childrenCount / totalRoomCount);
      }
      adultsCount = adultsCount - 2;
      totalRoomCount = totalRoomCount - 1;
      childrenAgeCount = childrenAgeCount + childrenCount;
      i=i+1;
    }
    console.log(rooms);
    return rooms;
  };
  
  caculatedHotelsRooms(6,3, { childAge_1: 2, childAge_2: 6, childAge_3: 4 })  