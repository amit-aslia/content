// const arr = ['amit', 'aslia']

// const greeting = greet => name => `${greet} ${name}`
// const greet = 'Good mornign';
// const greetList = arr.map(greeting(greet))

// console.log(greetList)

// const studentFeedback = [
//     'Nice Job Joe, you got an b',
//     'Excellent Job Jen, you got an a',
//     'Well done Steph, you got an c',
//     'What happened Allen, you got an d',
//     'Not good Gina, you got an f',
//   ]; 

const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
  ];

  const message = {
      a: 'Excellent Job',
      b: 'Nice Job',
      c: 'Well Done',
      d: 'What happend Allen',
      f: 'Not good'
  }

  const getGrade = (marks) => {
      if(marks > 90) return 'a'
      else if (marks >80) return 'b'
      else if(marks > 70) return 'c'
      else if (marks >= 60) return 'd'
      else return 'f'
  }

  const grades = feedback => student => {
      const grade = getGrade(student.grade);
      const message = feedback[grade];
      return `${message} ${student.name}, You got ${grade}`
  }

//   function grades (getGrade) {
//     return  function(grade) {
//         return getGrade(grade)
//     }
//    }

  const getGradeList = studentGrades.map(grades(message))
//   console.log(getGradeList)

const childrenAge = {
    child1: 1,
    child2: 2
}

getChildrenAges = (childrenCount, childrenAge) => Object.values(childrenAge).slice(0, childrenCount).join(',');

// console.log(getChildrenAges(1,childrenAge))

// const arr = [{id: 1, name: 'amit'}, {id: 2, name: 'Punnet'}, {id: 3, name: 'Punnet'}]
// const check = [1,2]
// const newA = arr.filter(data => check.includes(data.id) ? data.name : null)
// const string = newA.reduce((acc, cv) =>  `${acc}${`:${cv.name}`}`,'')
// console.log(string);

// const  arr = [' #Dmit','aaslia','dog']

// console.log(arr.sort((a,b) => a.replace(/[^a-zA-Z]/g, "").replace(/ /g, '').localeCompare(b.replace(/[^a-zA-Z]/g, "").replace(/ /g, ''))))

// const str = "abc's test#s";
// console.log(str.replace(/[^a-zA-Z]/g, "").replace(/ /g, ''));

// console.log(str.replace(/[^a-zA-Z]/g, "")

// const str = 'new_layout_version=true&tt_mailer=requested_trip_created&is_verified=1&phone=8437856181';

// const arr = str.split('&');
// console.log(arr);

// const str = 'abcd';
// console.log(str.toFixed(1))
// const str = "Shivani was so helpful from the beginning till the end of the trip. Initially, she convinced me to select the best rental and best location and best view in the island. I owe a ton of thanks for suggesting me a best option in all packages. She is so attentive and when i could not able to make it to the flight due to stringent  security check, she communicated to the airline that i got stuck in security check. The entire trip was wonderful and received best service ever! \nEntire trip was wonderfu...";
// const str = 'I am amit'
// console.log(str.length);
// const truncate = str.substring(0,195);
// console.log(truncate);

// const str = 'Very Good';
// const toLower = str => str.toLowerCase();
// const split = type =>  str => str.split(type);
// const join = str => str.join('');

// const pipe = (...fns) => sentence => fns.reduce((acc, cv) => cv(acc), sentence);

// console.log(pipe(toLower, split(' '), join)(str))

