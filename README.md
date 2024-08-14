# Descrição da API - Teste de Estágio

Esta API foi desenvolvida como parte de um teste de estágio com o objetivo de realizar web scraping de produtos (notebooks da marca Lenovo) a partir de um site de comércio eletrônico. A API foi construída utilizando Node.js, Axios e Cheerio, e tem como função principal coletar todos os dados disponíveis sobre notebooks Lenovo, ordenando-os do mais barato ao mais caro, e disponibilizando essas informações em formato JSON.

## Funcionalidades Principais:
Web Scraping:
A API acessa várias páginas de um site de e-commerce e extrai informações detalhadas sobre notebooks Lenovo, como nome, preço, descrição e avaliações.
Paginação Dinâmica: A API navega por todas as páginas do site até encontrar todos os notebooks Lenovo disponíveis, garantindo que nenhum produto seja ignorado.
Ordenação: Os notebooks coletados são automaticamente ordenados pelo preço, permitindo ao consumidor uma visualização clara dos produtos disponíveis do mais barato ao mais caro.
EndPoint: A API expõe um endpoint /laptops/lenovo que retorna os dados coletados em formato JSON.
## Tecnologias Utilizadas:
Node.js: Plataforma utilizada para executar o código JavaScript do lado do servidor.
Axios: Biblioteca para fazer requisições HTTP de maneira simples e eficiente.
Cheerio: Biblioteca utilizada para manipular e extrair dados de documentos HTML, simulando o comportamento do jQuery no lado do servidor.
## Como Utilizar:
Instalação: Clone o repositório e instale as dependências utilizando npm install.
Execução: Inicie o servidor com o comando node index.js.
Acesso: Acesse http://localhost:3000/laptops/lenovo para visualizar os dados dos notebooks Lenovo ordenados.
## Observações:
Este projeto foi desenvolvido como parte de um teste de estágio, focando em práticas de scraping e manipulação de dados. Ele demonstra habilidades em JavaScript, web scraping, manipulação de dados e construção de APIs RESTful.

