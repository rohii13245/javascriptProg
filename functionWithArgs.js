function reusableArgs(a,b){
    console.log(a-b);

}
reusableArgs(10,5);

//globalScope variable
var globalVar=10;

function fun1(){

    oopsvar=5;
}

function fun2()
{
    var output = "";
    if(typeof globalVar != "undefined"){
        output += "globalvar" + globalVar;
    }
    if(typeof oopsvar != "undefined"){
        output += "oopsvar" + oopsvar;
    }

    console.log(output);
}

fun1();
fun2();

//localScope

var outer="t shirt";

function f1(){
    var outer="sweater";

   return outer;
}

console.log(f1());
console.log(outer);









