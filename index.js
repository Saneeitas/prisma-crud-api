const express = require("express");
const app = express();
//const bodyParser = require('body-parser')

app.use(express.json());
app.use("/api", require("./routes/api.route"));

app.listen(3000, () => {
  console.log(`App is running on port 3000`);
});
