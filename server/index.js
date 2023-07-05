const { app } = require("./app");
require("dotenv").config();

const port = 3001;

app.listen(port, () => {
  console.log(`Poker app listening on port ${port}`);
});
