# Rocketseat Omnistack 9

<h1 align="center">
    <img alt="Frontend Home" title="Frontend Home" src=".github/home.png" width="250px" />
    <img alt="Frontend New Spot" title="Frontend New Spot" src=".github/new-spot.png" width="250px" />
    <img alt="Frontend List Spot" title="Frontend List Spot" src=".github/list-spot.png" width="250px" />
</h1>

<h1 align="center">
    <img alt="Mobile Login" title="Mobile Login" src=".github/mobile_login.jpg" width="150px" />
    <img alt="Mobile List spot" title="Mobile List Spot" src=".github/mobile_list.jpg" width="150px" />
    <img alt="Mobile Book" title="Mobile Book" src=".github/mobile_book.jpg" width="150px" />
</h1>

## 💻 Projeto

Projeto desenvolvido no evento "Omnistack 9" da [Rocketseat](https://rocketseat.com.br/).

O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período.

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

## :information_source: Como usar

Para clonar essa aplicação, você vai precisar de [Git](https://git-scm.com/), Node.js v10 e [yarn](https://yarnpkg.com) instalado.

### Rodar API

Configurar a conexão do banco de dados mongodb em `backend/src/server.js`.

```bash
# Diretório da API
cd backend/

# Instalar dependências
yarn install

# Iniciar servidor rodando na porta 3333
yarn dev
```

### Rodar Frontend

Configurar a conexão com o backend em `frontend/src/services/api.js` e `frontend/src/pages/Dashboard/index.js`

```bash
# Diretório do frontend
cd frontend/

# Instalar dependências
yarn install

# Iniciar aplicação rodando na porta 3000
yarn start
```

### Rodar Mobile

Configurar a conexão com o backend em `mobile/src/services/api.js` e `mobile/src/pages/List.js`.

```bash
# Diretório do mobile
cd mobile/

# Instalar dependências
yarn install

# Iniciar aplicação no Expo
yarn start
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<sup>Projeto desenvolvido com a tutoria de [Diego Fernandes](https://github.com/diego3g), da [Rocketseat](https://rocketseat.com.br/).</sup>
