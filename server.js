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