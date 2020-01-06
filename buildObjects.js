/*var ourDog ={
    "name" : "sanny",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["evertone"]

};*/

function Dog (val){
    var result="";

var myDog = {
    "name" : "quirrel",
    "legs" : 3,
    "tails" : 2,
    "friends" : []
};

// myDog['bark'] ="happy coder";
result = myDog[val];

return result;


}

console.log(Dog("name"));


// console.log(Dog(myDog));


//object access with dot notation

//var shirt = "friends";
//var shirts =myDog.friends;

//console.log(shirt);
//console.log(Dog(shirt));