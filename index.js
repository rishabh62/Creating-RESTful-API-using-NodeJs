import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
   return res.send(`Node and Express server is running on ${PORT}`)
});

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));