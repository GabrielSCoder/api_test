import express from "express";

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({success : true, message: "Olá!"})
})

app.get("/meet", (req, res) => {
    res.status(200).json({success : true, message: "Olá, tudo bem?"})
})

app.listen(123, () => console.log("Server ready on port 3000."));

module.exports = app;
