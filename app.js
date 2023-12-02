const express = require("express");
const app = express();
const connectDatabase = require("./database/conn.js");
connectDatabase();

require("dotenv").config();

const pictureRouter = require("./routes/picture.js");

const port = process.env.PORT || 4000;

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`🟢 Server On ${port}`);
});
