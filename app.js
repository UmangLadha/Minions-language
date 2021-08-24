var btntranslate = document.querySelector("#btn-translate");
var inputtext = document.querySelector("#input-txt");
var outputtext = document.querySelector("#output-txt");
var url= "https://api.funtranslations.com/translate/minion.json";
function getURL(text){
    return url + "?text=" + text;
}

 function clickhandler() 
 {
    var text = inputtext.value;
    fetch(getURL(text))
    .then(response => response.json())
    .then(json => outputtext.innerText = json.contents.translated );
 };
 btntranslate.addEventListener("click" , clickhandler);
  