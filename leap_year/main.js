let check = document.getElementById("button")
let year =document.getElementById("date")

let leapyear =function (){
    if(year %4 ==0){
        if(year %100 ==0){
            if (year % 400 == 0) {
               alert("leap year");
                }
                else{
                    alert("not leap year");
                }

        }else{
            alert("leap year");
        }
        
    }
    else{
        alert("not leap year");
    }

}
check.addEventListener("click",leapyear)


    




