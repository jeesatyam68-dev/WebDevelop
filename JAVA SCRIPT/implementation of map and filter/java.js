const students = [
  { id: "001", Name: "Satyam Upadhyay", Sports: "Cricket" },
  { id: "002", Name: "Dhruv", Sports: "Football" },
  { id: "003", Name: "Parth Mungali", Sports: "Volleyball" },
  { id: "004", Name: "Shivam Upadhyay", Sports: "Cricket" },
  { id: "005", Name: "Risabh Kumar", Sports: "Badminton" },
];

// console.log(students)

const filterRes=students.filter((data)=>{
return data.id %2 !=0
})
console.log("Filter result: ", filterRes);

const NAMES=students
.filter((std)=>std.Sports==='Cricket')
.map((names)=> names.Name)
console.log(NAMES);


