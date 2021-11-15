//npm install --save mysql2
//npm i sequelize {These two packages are necessary to connect with Express.js API}
//npm install dotenv {To load environment variables from a .env file into process.env}

const express = require("express");
const routs = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!!`);
});