# Rocketseat Omnistack 9

O Aircnc é um projeto que visa conectar empresas que querem abrir spots e desenvolvedores que procuram um lugar para trocar ideias com devs, conhecer a empresa e trabalhar lá por um período.

Projeto desenvolvido com o backend em Nodejs com framework express, frontend em React, mobile em React Native, com a utilização de socket.io para a comunicação em tempo real.

## Requerimentos
 - [Nodejs](https://nodejs.org/en/)
 - [Yarn](https://yarnpkg.com/)
 - [Expo](https://expo.io/)

## Instalação

**Backend**

Configurar a conexão do banco de dados mongodb em `backend/src/server.js`.

```bash
cd backend/
yarn install
yarn dev
```

**Frontend**

Configurar a conexão com o backend em `frontend/src/services/api.js` e `frontend/sec/pages/Dashboard/index.js`

```bash
cd frontend/
yarn install
yarn start
```

**Mobile**

Configurar a conexão com o backend em `mobile/src/services/api.js` e `mobile/src/pages/List.js`.

```bash
cd mobile/
yarn install
yarn start
```