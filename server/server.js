import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
let port = process.env.PORT || 3000;

app.use(cors({
        origin: "http://localhost:1234",
        methods: "GET,POST,PUT,PATCH,UPDATE,DELETE",
        optionsSuccessStatus: 200,
    }))
    // Define a middleware which basically parse the json request.
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<h1>Hi Tushar I AM SERVER</h1>")
})

app.post("/api/submit", (req, res) => {
    const { inputUser, inputPass } = req.body;
    const newData = `Hi ${inputUser}!! You are registered successfully`;
    res.json({ message: "DATA REGISTERED SUCCESSFULLY", data: newData });
})

app.get("/api/checkAvailability", (req, res) => {
    res.json({ message: "Server is available" });
})

app.listen(port, () => {
    console.log(`Server is listening on this port ${port}`);
})