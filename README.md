# Projeto Dev Burgues (For Each, Map, Reduce e Filter)<br> 
### Estrutura do Projeto:<br>
Projeto é composto por três arquivos principais:
• index.html: Define a estrutura e o conteúdo da página web.
• styles.css: Contém as regras de estilo para a aparência visual da página.
• products.js: Armazena os dados dos produtos (hambúrgueres) em um array JavaScript.
• scripts.js: Contém a lógica JavaScript para interagir com a página, manipular os produtos e responder aos cliques dos botões.<br>

# Função de Cada Botão:<br>
### Cada botão no seu index.html está associado a uma função JavaScript específica no scripts.js, 
que manipula e exibe os dados de diferentes maneiras:<br>


## Botão "Mostrar Tudo / For Each" (.show-all)<br>
Função: showAll(menuOptions)<br>
## O que faz:<br>
Este botão, ao ser clicado, chama a função showAll passando o array menuOptions completo. 
Ele utiliza o método forEach para iterar sobre cada item do array menuOptions e cria dinamicamente um 
li para cada produto<br>
(com imagem, nome e preço), exibindo todos os produtos na lista ul.<br>

<figuri>
<img src="https://github.com/MarceloNaja79/Projeto-DevBurguers/blob/c6dbfd215ba1f2f98350593397b2d8b737d86f95/Dev%20Burguer%20For%20Each.PNG"/>
<figcaption>Foto Botão Mostrar Tudo</figcaption>
<figuri/>

## Botão "Mapear / Map" (.map-all)<br>
### Função: mapAllItems()<br>
### O que faz:<br>
Ao ser clicado, este botão executa a função mapAllItems. Dentro dela, o método map é usado para criar um novo array de produtos.<br>
Para cada produto, ele calcula um novo preço com 10% de desconto.<br> 
Em seguida, a função showAll é chamada com este novo array de produtos com preços ajustados, exibindo-os na tela.

<figuri>
<img src="https://github.com/MarceloNaja79/Projeto-DevBurguers/blob/287c799d63ecc003692b44610bbc592bd64d7ac7/Dev%20Burguer%20Map.PNG"/>
<figcaption>Foto Botão Mapear</figcaption>
<figuri/>


## Botão "Somar Tudo / Reduce"<br>
### Função: sumAllItems()<br>
### O que faz:<br>
Este botão, quando clicado, aciona a função sumAllItems. Ela utiliza o método reduce para somar o preço de todos os produtos no array menuOptions, resultando em um valor total. Este valor total é então exibido diretamente na lista ul.

<figuri>
<img src=""/>
<figcaption>Foto Botão Mapear</figcaption>
<figuri/>








<a href="https://tela-de-login-marcelonaja.netlify.app/" /> Ir para o Site </h3>
