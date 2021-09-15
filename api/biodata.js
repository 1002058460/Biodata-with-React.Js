const express = require("express");
const cors = require("cors");
const { Client } = require('pg')

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  const PORT = 5001;

  const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "biodata"
  });

  client.connect();

  app.get("/", (req, res) => {
    res.json({ message: "Hello Orenda" });
  });

  app.get("/biodata", (req, res) => {
    client.query(`SELECT * FROM bio WHERE id=1`, (err, response) => {
      client.end;
      if (!err) {
        return res.json(response.rows[0]);
      } else {
        return res.json({error: err.message});
      }
    });
  });

  app.listen(PORT, () => {
    console.log(`"Server is Running on Port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});