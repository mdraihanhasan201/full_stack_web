const button = document.getElementById('button');
const counter=0;

function innerelement(){
    const counterele=document.getElementById('counter')
    counter++
    counterele.innerText=counter;

}


button.addEventListener('click',innerelement)

