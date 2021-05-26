const express = require("express");
// const routes = require("./routes");
const path = require('path');

// App
const app = express();

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

const router = express.Router();

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,'/index.html'));
});

module.exports = router;

app.use('/', route);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));