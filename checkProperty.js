var myobject = {
    "gift":" pony ",
    "new" :" device"
}

function checkProp (checks){
    
    if(myobject.hascheckProp(checks)){
        return myobject[checks];
    }else 
    
    return "remind me";

}

console.log(checkProp("gift"));