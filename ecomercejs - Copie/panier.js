

//recuperation des donner via url
var $_GET = [];

var parts = window.location.search.substr(1).split("&");
if(parts.length > 0){

 for (var i = 0; i < parts.length; i++) {
 
  var temp = parts[i].split("=");
  $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
 }}
   if($_GET.name != null && $_GET.prix != null && $_GET.descrition != null && $_GET.image != null){
    ajout($_GET);
  
 

}

//ajoue au local storage

function ajout($_GET){

  let produit = 
  {
      name : $_GET.name,
      prix : $_GET.prix,
      img : $_GET.image,
      description : $_GET.descrition
  }

 const random = (max,min)=>{
  return Math.floor(Math.random() * (max - min + 1) + min);
 }

  let names = random(100, 1);

  let objet = JSON.stringify(produit);
  localStorage.setItem(names , objet);
}




//recuperation des element dans le local storage pour mis en forme html
let test =  document.getElementById('objets');

for (var i = 1; i <= 100; i++)
 {
   if(localStorage.getItem(i) != null){
  let recuperation = localStorage.getItem(i);
  let objet = JSON.parse(recuperation);
  
  test.innerHTML += '<div class="objet"><span class="objetname"><img src="'+ objet.img +'" alt="image"><h2>&ensp;'+ objet.name + '</h2></span><a href="sup.html?id='+ i +'">suprimer du panier</a><span>'+ objet.prix + ' euro </span></div>';


   }else{
   
   }
 

 }


function clear(){

}