const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
   res.send("Food For You API is running");
});

app.listen(port, () => {
   console.log("Food For You Server is running on port", port);
});