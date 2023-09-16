const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  const dummyArray=[
    { name: "Rocky", age: 24, profession: "admin" },
    { name: "Rani", age: 27, profession: "developer" },
  ]
  
  // 1. Print Developers
  function printDeveloper() {
    for(i=0;i<data.length;i++){
      if(data[i].profession=="developer"){
        console.log(data[i].name);
      }
    }
  }
  
  // 2. Add Data
  function addData() {
    data.push(
      {
        name:"raju",
        age:54,
        profession:"manager"
      },
      {
        name:"raju",
        age:54,
        profession:"admin"
      }
    );
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let noAdmin = data.filter((ele) => ele.profession != "admin");
    console.log(noAdmin);
  }
  
  // 4-. Concatenate Array
  function concatenateArray() {
    let concatedArray=data.concat(dummyArray);
    console.log(concatedArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgAge;
    let totalAge=0;
    for(i=0;i<data.length;i++){
      totalAge=totalAge+data[i].age;
    }
    avgAge=totalAge/data.length;
    console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(i=0;i<data.length;i++){
      if(data[i].age>25){
        return console.log("Validated. Found person above 25");
      }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uniqueProfessions = [...new Set(data.map(person => person.profession))];
    console.log(uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(i=0;i<data.length;i++){
      if(data[i].name=="john"){
        data[i].profession="manager"
      }
  
    }
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const developerCount = data.filter(person => person.profession === 'developer').length;
    const adminCount = data.filter(person => person.profession === 'admin').length;
    const managerCount = data.filter(person => person.profession === 'manager').length;
    console.log("Developer", developerCount);
    console.log("Admin:", adminCount);
    console.log("Manager:", managerCount);
  
  }
  