const express = require("express");
const bodyParser = require("body-parser");
const dateCondition = require("./Middlewares/date")
//Initialisation for app params
const app = express();
const port = 3500;
app.use(bodyParser());

//Define Routes
app.get("/", (req, res) => {
  
  res.status(200).send("Hello there ✌️");
});

app.get("/welcome",dateCondition,(req,res)=>{
  res.status(200).send("<h1>Welcome to Express 😍</h1>")
})


app.get("/home", (req, res) => {
  try {
    res.sendFile(__dirname+"/Views/index.html",(err)=>{
      res.status(400).send("<h2>Sorry 😫, try again later</h2>")
    })

  } catch (error) {
    console.log(error);
    res.status(400).send("<h2>Sorry 😫, try again later</h2>")
  }
});

//Get data from the request using the post
app.post("/addUser", (req, res) => {
  if (req.body) {
    console.log(req.body);
    res.status(200).send("user added successfully");
  } else {
    res.status(400).send("3andek ghalta sahbi, thabet rouhek");
  }
});

//Starting the server or the express app
app.listen(port, (e) => {
  if (e) {
    console.log("error in the server:", e);
  } else {
    console.log(`Server is running on.. http://localhost:${port}`);
  }
});
