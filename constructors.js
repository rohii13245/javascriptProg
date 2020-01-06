// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
  
  console.log(myFather);
  