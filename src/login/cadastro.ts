
var btnEntrar = document.querySelector("#Entrar");
var btnCadastrar= document.querySelector("#Cadastar");
var body = document.querySelector("body");
btnEntrar.addEventListener("click", function () {
    body.className = "sign-in-ts"; 
 });
 btnCadastrar.addEventListener("click", function () {
     body.className = "sign-up-ts";
 });
