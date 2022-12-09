const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./DH-Heroes/Public"));

app.listen(3030, () => 
    console.log("Server listening on port 3030")
);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/DH-Heroes/views/index.html"));
});