function changecolor(color){
    document.body.style.backgroundColor = color;
    document.getElementById("colorvalue").textContent= "background color is : "+color; 
    
    document.getElementById("color").innerText="Color";
}