var btnTranslate=document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var textoutput=document.querySelector("#output")

function clickHandler(){
    
    textoutput.innerText="your name is "+txtinput.value;
}
btnTranslate.addEventListener("click",clickHandler)