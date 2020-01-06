var changed=0;

function change(num){
    return (num+5)/3;
}

changed = change(10);

console.log(changed);

//if else ladder

var array = ["go","home","now","otherwise","i","will"];
function names(par,strokes){
    
    if(strokes==1){
    return array[0];
    }else if(strokes <= par-2)
    {
           return array[1];
    }
}

console.log(names(5,1));

