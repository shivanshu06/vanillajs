var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var textoutput = document.querySelector("#output")


var serverURL = " https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input

}

function errorHandler(error) {
    console.log("error occured", error);
    alert("sorry server error!!!! try again later")
}

function clickHandler() {
    var inputtext = txtinput.value;

    fetch(getTranslationURL(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedtxt = json.contents.translated;
            textoutput.innerText = translatedtxt
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler)