# Desafio Sharenergy back end jr

<h2>🔎 Sobre o projeto</h2>
<p> A proposta do desafio era criar uma API estilo REST para os clientes da empresa</p>

## :pencil2: Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## Bibliotecas Utilizadas

- Express
- Nodemon
- Mongoose

<h2 id="linguagens">📚 Softwares & Ferramentas utilizadas nesse projeto </h2>

- [x] Visual Studio Code
- [x] NodeJs
- [x] JavaScript
- [x] MongoDB
- [x] Git

## ⚙ Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/willcrvlh/desafio-sharenergy-2023-01.git
```

Instalando as bibliotecas:

```
npm install
```

Atualizando os scripts no package.json:

```
"scripts": {
    "start": "node ./src/index.js",
    "dev": "nodemon ./src/index.js"
}
```

Rodando o projeto no modo de produção:

```
npm start
```

Rodando o projeto no modo de desenvolvimento:

```
npm run dev
```

## Exemplo de Rota: Pedidos

- **GET /pedidos**

Exemplo de esquema da resposta:

```json
{
    "_id": "63b730ef641b0f121805328a",
        "nome": "Willian2",
        "email": "will2@gmail.com",
        "telefone": 21965467671,
        "cpf": 10101010101
}
```

- **GET /pedidos/:id**

Exemplo de esquema da resposta:

```json
{
  "pedidos": {
    "_id": "63b7334a9848912efeb0c1a5",
        "nome": "Jamile",
        "email": "jamile@gmail.com",
        "telefone": 21965431012,
        "cpf": 11111111111,
  }
}
```

- **POST /pedidos**

Exemplo de esquema da requisição

```json
{
     "nome": "Wesley 3",
    "email": "wesl3@gmail.com",
    "telefone": 21975460980,
    "cpf": 52525252528
}
```

Exemplo de esquema da resposta do POST

```json
{
    "message": "cliente criado com sucesso!",
    "error": "Não foi possível criar um cliente"
}
```

- **PATCH /pedidos/:id**

Exemplo de esquema da requisição

```json
{
    "_id": "63b7334a9848912efeb0c1a5",
        "nome": "Jamile",
        "email": "jamile@gmail.com",
        "telefone": 21965431012,
        "cpf": 11111111111,
}
```

Exemplo de esquema da resposta

```json
{
    "message": "Cliente atualizado com sucesso!",
    "error": "cliente não encontrado"
}
```

- **DELETE /pedidos/:id**

Exemplo de esquema da resposta

```json
{
    "message": "Cliente removido com sucesso!",
    "error": "Não foi possível encontrar o cliente."
}
```

- **ERROS**

Exemplo de esquema da resposta

```json
{
    "error": "Não foi possível encontrar o seu pedido."
}
```


