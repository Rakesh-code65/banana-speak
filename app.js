var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#Output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server! Try again after some time")
}
function clickHandler() {
    var InputText = txtinput.value;
    fetch(getTranslationURL(InputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;  
        })
    .catch(errorHandler);
};
btnTranslate.addEventListener("click", clickHandler)
