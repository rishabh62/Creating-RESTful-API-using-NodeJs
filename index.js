import express from "express";
import routes from "./src/routes/crmRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

//mongoose connection
console.log(global);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CRMdb", {useMongoClient: true});

//bodyParser setup
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);

app.get("/", (req, res) => {
   return res.send(`Node and Express server is running on ${PORT}`);
});

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));