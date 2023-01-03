//Olá js
var input = document.getElementById("pesquisar");
var btn = document.getElementById("bPes");

btn.addEventListener('click', (e) => {
  search(e)
})

var timefired = null;
input.addEventListener('keyup', (e) => {
  

search(e);

var m = document.getElementsByClassName("principal")[0];
m.style.height = "20vh";
//h1 --------
m.getElementsByTagName("h1")[0].style.fontSize = "9vh";

//input ------
m.getElementsByTagName("input")[0].style.top = "13vh"
m.getElementsByTagName("input")[0].style.height = "4.40vh"

//button -----
m.getElementsByTagName("button")[0].style.top = "13vh";
m.getElementsByTagName("button")[0].style.height = "4.40vh";



  

  
//Reset -_-_-_-_-_-_-_-_-_--_-_-_-_-_-_-_

clearTimeout(timefired);
timefired = setTimeout(function() {
  back(m)
}, 1000);

document.addEventListener("click", () => {
 back(m)
})
})

function back(m) {
  m.style.height = "10vh";
  //h1 --------
  m.getElementsByTagName("h1")[0].style.fontSize = "5vh";

  //input ------
  m.getElementsByTagName("input")[0].style.top = "6vh"
  m.getElementsByTagName("input")[0].style.height = "2.20vh"

  //button -----
  m.getElementsByTagName("button")[0].style.top = "6vh";
  m.getElementsByTagName("button")[0].style.height = "2.20vh";
}


/** Pesquisa por meio do input cards semelhantes
 */
function search(e=String("Evento retornado pelo Listening"))  {
  if(input.value.length <= 0) return;
var pesquisa = input.value.trim().toLowerCase();

var produto = produtos.find(y => y.tags.includes(pesquisa));

if(!produto) return;

var d = document.getElementById(produto.name);

d.scrollIntoView({behavior: "smooth", block: "center"})

d.style.borderTop = "2px solid yellow";
d.style.borderLeft = "2px solid yellow";
d.style.borderRight = "2px solid yellow";
setTimeout(() => {
  d.style.border = "none";
}, 2500)
}
