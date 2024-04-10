const numberdisplay = document.querySelector(".content");
const  button1 = document.querySelectorAll(".container button");
let number=0;

function updatenumber() {
    numberdisplay.textContent=number;
    for(let i=0;i<button1.length;i++){
        button1[i].addEventListener("click",()=>{
            if(this.id=="increment")
                number++;
            else if(this.id=="decrement")
                number--;
            else number=0;
            updatenumber();
        });
    }

    if(number%2==0)
        numberdisplay.style.color="green";
    else if(number%2!=0)
        numberdisplay.style.color="red";
    else
        numberdisplay.style.color="black";
}