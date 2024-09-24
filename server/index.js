const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const authRoutes = require("./Routes/auth");
const noteRoutes = require("./Routes/notes");
app.use(cors(
    {
        origin:["https://deploy-mern-app.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
    ));
const app = express();
const PORT = 6969;

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb+srv://nira21cs:CpMPVrSgPkKjle2f@cluster0.xal49.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0')
try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Connection Successfull");
} catch (error) {
    console.log(error);
}

app.get("/", (req, res) => {
    res.send("Server Is Running");
});


app.use("/auth", authRoutes);
app.use("/notes", noteRoutes);
app.use("/files", express.static("files"));

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})
