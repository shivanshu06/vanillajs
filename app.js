var btnTranslate=document.querySelector("#btn-translate");

var txtinput=document.querySelector("#txt-input");

function clickHandler(){
    
    console.log(txtinput.value)
}

btnTranslate.addEventListener("click",clickHandler)