<h3 align="center">
  ecoleta-api :leaves:
</h3>

<blockquote align="center">Ecoleta API -> Aplicação para ser utilizada com ecoleta web/mobile.</blockquote>

<p align="center">
  <a href="http://sgeinformatica.com.br/">
    <img alt="Made by Sge" src="https://i.imgur.com/Dm7Xym9.png" width="70" heigth="20">
  </a>
</p>

## :smiley: Aplicação para cadastro e pesquisa de pontos de coleta.

- Utilizado para buscar, listar e cadastrar pontos de coleta baseados em sua localização.

## :cold_sweat: Desafios encontrados:

- Uso de `Sequelize` e `PostgresSQL` para armazenamento dos dados em tabelas relacionadas.
- Uso de `join` nas queries do banco.

## :computer: Tecnologias utilizadas:

- ⚛️ ReactJS.
- 📱 React Native - Expo no mobile.
- ☕️ Node.js.

## :fire: Instalação:

1. Clone este repositorio.

```sh
  $ git clone https://github.com/leolivm/ecoleta-api.git
```

2. Configure as credenciais e dialeto de conexão com o banco de dados no arquivo `.env`.

```javascript
module.exports = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

3. `cd corebiz`<br />
4. `yarn install` ou `npm install` para instalar as dependências.<br />
5. Após feita a configuração e instalação das dependências, execute os comandos de `migration`:

```sh
  $ yarn sequelize db:migrate
  $ yarn sequelize db:seed:all
```

6. `yarn dev` para rodar a aplicação na porta `3333`.<br />

## Contato:

- [LinkedIn](https://www.linkedin.com/in/leandro-martins-0640921a4/)
- leandro@sgeinformatica.com.br
