import express from "express";
import routes from "./src/routes/crmRoute";

const app = express();
const PORT = 3000;

routes(app);

app.get("/", (req, res) => {
   return res.send(`Node and Express server is running on ${PORT}`);
});

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));