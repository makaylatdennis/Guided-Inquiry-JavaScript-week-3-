function personalInfo (name, age, ssn){

    const privateProperties = {
        name: name,
        age: age,
        ssn: ssn,
    };
    
    
    function setName (newName){
    privateProperties.name = newName;
    
    }
    
    
    function getName(){
        return privateProperties.name;
    }
    
    function setAge (newAge){
        privateProperties.age = newAge;
        
        }
        
        
        function getAge(){
            return privateProperties.age;
        }
    
    function setSsn (newSsn){
        privateProperties.ssn = newSsn;
    }
    
    
    
    return {
    setName: setName,
    getName: getName,
    setAge: setAge,
    getAge: getAge
        };
    }
    
    const person = personalInfo ()
    
    person.setName("John");
    person.setAge(30);
    
    
    console.log(person.getName());
    console.log(person.getAge());