var btntranslate = document.querySelector("#btn-translate");
var inputtext = document.querySelector("#text-input");
var outputdiv = document.querySelector("#output-translate");


 function clickhandler() 
 {
    outputdiv.innertext = "banana language"+ inputtext.value;
}
console.log(outputdiv)

btntranslate.addEventListener("click" , clickhandler);
  