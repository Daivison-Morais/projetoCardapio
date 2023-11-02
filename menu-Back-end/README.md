# API para gerenciar cardápios de produtos
-Este é um projeto backend que executa, CRUD de cardápios, produtos e categorias de produtos.

## Features

- Cadastrar cardápios, categorias e produtos.
- Atualizar dados específicos.
- Lista todos, para cardápio, categorias e produtos.
- Filtrar produtos por categoria.

### Cadastre um Cardápio.

```http
POST /menu
```

#### Request:

| Body              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `name`    | `String` | **Required**. Nome do cardápio |


#### Response:

```json
{
  "name": "Diurnal"
}
```
### Cadastre uma categoria.

```http
POST /categories
```

#### Request:

| Body              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `name`    | `String` | **Required**. nome da categoria |
| `image`  | `String` | **Required**. URL da imagem     |
| `menusId` | `Array` | **Required**. Array de Ids|

#### Response:

```json
{
  "name": "doces",
  "image": "Url",
  "menusId":["idCardapio"]
}
```

### Cadastre um produto.

```http
POST /products
```

#### Request:

| Body              | Type     | Description                            |
| :---------------- | :------- | :------------------------------------- |
| `name`    | `String` | **Required**. nome da categoria |
| `image`  | `String` | **Required**. URL da imagem     |
| `price` | `int` | **Required**. o valor deve ser armazenado como multiplo de 100|
| `description`    | `String` | **Required**. Descrição do produto |
| `promotion`  | `boolean` | **Required**. Esta ou não na promoção     |
| `shift` | `String` | **Required**. turno do cardápio |
| `categoryId`    | `String` | **Required**. id da categoria |
| `menusId` | `Array` | **Required**. Array de Ids de cardapios|
#### Response:

```json
{
      "name": "X Tudo 400g",
      "image": "https://cdn.discordapp.com/attachments/1068625823613067355/1069019233826119802/images_26.jpg",
      "price": 3000,
      "description": "Contém pão brioche, duas carnes 60g, bacon, queijo, tomate e alface",
      "promotion": true,
      "shift": "diurnal",
      "categoryId": "653ffccc6d2f241147ce2e7e",
      "menusId": ["653ffb446d2f241147ce2e7c"]
    }
```

### filtre produtos por categoria.

```http
GET /products/:idCategory
```
#### Response:

```json
[
  {
    "id": "654112544f0e18ad1ac0628b",
    "name": "Coxinha",
    "image": "https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg",
    "price": 500,
    "description": "Recheada com queijo e presunto 300g",
    "promotion": true,
    "shift": "diurnal",
    "menusId": [
      "653ffb446d2f241147ce2e7c"
    ],
    "categoryId": "653ffccc6d2f241147ce2e7e"
  }
]
```



### filtre produtos por categoria.

```http
GET /menu/shift
```
#### Response:

```json
[
  {
    "id": "654112544f0e18ad1ac0628b",
    "name": "Coxinha",
    "image": "https://cdn.discordapp.com/attachments/1068625823613067355/1069016370370588813/images_16.jpg",
    "price": 500,
    "description": "Recheada com queijo e presunto 300g",
    "promotion": true,
    "shift": "diurnal",
    "menusId": [
      "653ffb446d2f241147ce2e7c"
    ],
    "categoryId": "653ffccc6d2f241147ce2e7e"
  }
]
```

## Para rodar

Adicione um arquivo .env conforme arquivo .env.example

```bash
$ npm install
```
```bash
$ npx prisma generate
```
```bash
$ npm run start
```
