
let add = document.getElementById('add')

add.onclick=function(){

    var num1=Number(document.getElementById('number1').value);
    var num2=Number(document.getElementById('number2').value);
    var result = num1+num2;
    
    document.getElementById("result").value = result;
}






let sub = document.getElementById('sub')

sub.onclick=function(){

    var num1=Number(document.getElementById('number1').value);
    var num2=Number(document.getElementById('number2').value);
    var result = num1-num2;

    document.getElementById("result").value = result;
}



let mul = document.getElementById('mul')

mul.onclick=function(){

    var num1=Number(document.getElementById('number1').value);
    var num2=Number(document.getElementById('number2').value);
    var result = num1*num2;

    document.getElementById("result").value = result;
}


let div = document.getElementById('div')

div.onclick=function(){

    var num1=Number(document.getElementById('number1').value);
    var num2=Number(document.getElementById('number2').value);
    var result = num1/num2;

    document.getElementById("result").value = result;
}