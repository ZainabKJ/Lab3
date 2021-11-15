const express = require("express");
//creating app
const app = express();
//pass requests to the router middleware
const router = require("./routes/post");
app.use(router);

// const router = require("./apis/routes/");
// app.use(router);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index"); //no need for ejs extension
});
router.post("/api/register", clientController.registerControl);
//route for login
router.post("/api/login", clientController.loginControl);
//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/api/register", (req, res) => {
  res.render("register");
});
app.get("/api/catalogue.", (req, res) => {
  res.render("catalogue");
});

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
