const { app } = require("./app");
const { db } = require("./utils/database");

const PORT = process.env.PORT || 5003;

const { Categorie } = require("./models/categoriesModel")

db.authenticate()
  .then(() => console.log("Successful connection to Databases"))
  .catch((err) => console.log(err));

db.sync({force: true})
  .then(() => console.log("Database synced"))
  .catch((err) => console.log(err));
//Listen the server

app.listen(PORT, () => {
  console.log(`Express app runing on port: ${PORT}`);
});