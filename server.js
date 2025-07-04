const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder or current directory
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "netflix.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
