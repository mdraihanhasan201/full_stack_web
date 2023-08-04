let button = document.getElementById('button')
let button2 = document.getElementById('button2')
let count = document.getElementById("counter");
let ulElement = document.getElementById('list-item');


let counter=0;
function increment (){
    counter++
    count.innerHTML=counter;
    let li = document.createElement('li');
    ulElement.appendChild(li);
    let text = document.createTextNode(counter+'sentance');
    li.appendChild(text);
    li.innerHTML="<i> karim<i>"+counter;
    li.setAttribute=('data-counter'+counter);
    console.log(li);



   
}

function decrement (){
    let li =ulElement.querySelector('[data-counter="'+counter+'" ]');
    li.remove()

    counter--
    count.innerHTML=counter;
    
    
    

    

}

button.addEventListener('click',increment);
button2.addEventListener('click',decrement);





















// var incriment =document.getElementById("button");
// con=0;
// var counter =document.getElementById("counter")

// var utsho=()=>{
//     let num=con++;
//     counter.innerHTML=num;

// }


// incriment.addEventListener('click',utsho)
