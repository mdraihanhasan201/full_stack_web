var incriment =document.getElementById("button");
con=0;
var counter =document.getElementById("counter")

var utsho=()=>{
    let num=con++;
    counter.innerHTML=num;

}


incriment.addEventListener('click',utsho)
