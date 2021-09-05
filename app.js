// const { json } = require("express");

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/sith.json";
function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}
// erroe handling function
function errorHandler() {
    console.log("error occured", error);
    alert("somethig wrong with server try again some later");

}
function clickEventHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(res => res.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}
btnTranslate.addEventListener('click', clickEventHandler)









// leap year // prime number 
// status code blog 




