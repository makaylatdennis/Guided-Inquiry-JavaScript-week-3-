

// function exerciseOfDay(){
//     return function(activity){
//         const dailyExercise = "Today's exercise: " + activity;
//         return dailyExercise;
//     };
// }

// const exercise = exerciseOfDay();

// console.log(exercise("Running"));
// console.log(exercise("Swimming"));
// console.log(exercise("Dancing"));
// console.log(exercise("Fencing"));






// function sharePizza(x, y){

//     const slicesPerPerson = x/y;
// return `Each person gets ${slicesPerPerson} slices of pizza; from our 8 slice pizza `;

// }

// console.log(sharePizza(8, 2)); 
// console.log(sharePizza(8, 3));
// console.log(sharePizza(21, 20));
// console.log(sharePizza(10, 3)); 


// function personalInfo (name, age, ssn){

// const privateProperties = {
//     name: name,
//     age: age,
//     ssn: ssn,
// };


// function setName (newName){
// privateProperties.name = newName;

// }


// function getName(){
//     return privateProperties.name;
// }

// function setAge (newAge){
//     privateProperties.age = newAge;
    
//     }
    
    
//     function getAge(){
//         return privateProperties.age;
//     }

// function setSsn (newSsn){
//     privateProperties.ssn = newSsn;
// }



// return {
// setName: setName,
// getName: getName,
// setAge: setAge,
// getAge: getAge
//     };
// }

// const person = personalInfo ()

// person.setName("John");
// person.setAge(30);


// console.log(person.getName());
// console.log(person.getAge());


class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    exercise() {
      console.log(`${this.name} thinks exercise is great for both your mental and physical health`);
    }
  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
    }
  }
  
  class Programmer extends Person { //extends keyword establishes inheritance
    constructor(name, job, age, languages) {
      super(name, job, age); // super keyword assures that the properties from Person will be placed in Programmer
      this.languages = languages;
      this.busy = true;
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage() {
      this.languages.push();
    }
  
    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join}`);
    }
  }
  
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  console.log(c1.listLanguages());
  console.log(c2.listLanguages());
  console.log(c3.listLanguages());
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  person1.exercise();
  person1.fetchJob();
  
  








