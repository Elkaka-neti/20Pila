//oi d novo, js
var main = document.getElementById("newProduct");


  
for(let produto of produtos) {
  
  document.writeln(`<div id='${produto.name.toString()}'><header><img src="${produto.image}"/></header><main><h1>R$${produto.price}</h1></main><inside><p>${produto.desc.slice(0, 76).replace(RegExp("<", "gi"), " ")} <a href='${produto.url + "#" + produto.id}'>ler mais</a></p></inside><footer><img src="/desconto.png"/><p>${produto.name}</p></footer></div>`);
  
  document.getElementById(produto.name.toString()).addEventListener("click", (e) => {
  
    window.location.href = produto.url + "#" + produto.id;
  })
 
  /*
  <div>
   <header>
      <img src="${produto.image}"/>
   </header>
   <main>
      <h1>R$${produto.price}</h1>
   </main>
   <inside>
      <p>${produto.desc.slice(0,76)} <a href=${produto.url}>ler mais</a></p>
   </inside>
   <footer>
      <img src="/desconto.png"/>
      <p>15% OFF</p>
   </footer>
  </div>
  */
  
  /*
    <div>
        <header>
          <img src="/produto.jpg"/>
        </header>
        <main>
          <h1>R$29,90</h1>
        </main>
        <inside>
          <p>If I have another container inside that first container with a width of 50% <a href="/">ler mais</a></p>
        </inside>
        <footer>
          <img src="/desconto.png"/>
          <p>15% OFF</p>
        </footer>
      </div>
    
  */
}

/*
 <div>
        <header>
          <img src="/produto.jpg"/>
        </header>
        <main>
          <h1>R$29,90</h1>
        </main>
        <inside>
          <p>If I have another container inside that first container with a width of 50% <a href="/">ler mais</a></p>
        </inside>
        <footer>
          <img src="/desconto.png"/>
          <p>15% OFF</p>
        </footer>
      </div>
      <div>
        <header>
          <img src="/produto.jpg" />
        </header>
        <main>
          <h1>R$29,90</h1>
        </main>
        <inside>
          <p>If I have another container inside that first container with a width of 50% <a href="/">ler mais</a></p>
        </inside>
        <footer>
          <img src="/desconto.png" />
          <p>15% OFF</p>
        </footer>
      </div>
      */
