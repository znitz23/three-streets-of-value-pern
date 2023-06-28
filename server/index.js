const { app } = require("./app");
require("dotenv").config();

const port = 3000;

app.listen(port, () => {
  console.log(`Poker app listening on port ${port}`);
});
