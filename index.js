const express = require("express");
const PORT = process.env.PORT || 8000;
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
