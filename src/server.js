const express = require("express");
const app = express();
const cors = require("cors");
const test = require("./test");

app.use(cors());

app.use("/api", test);

app.get("/",(req, res) => {
    res.send("server open");
});

const port = 4343;

app.listen(port, () => {
    console.log(`✅ Server listening on port http://localhost:${port} 🚀`);
});