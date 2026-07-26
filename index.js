const express = require("express"); // express is basically a function and it returns a value when we execute it.
const app = express(); // app is a variable and its basically an object.

let port = 8080;

// 1st propert listening to incoming requests.
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//         // console.log(req);
//     console.log("request received");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

// Routing Examples below.
// app.get("/", (req, res) => {
//     res.send("Hello, i am root path");
// });
// app.get("/apple", (req, res) => {
//     res.send("You contated apple path");
// });
// app.get("/orange", (req, res) => {
//     res.send("you contaced orange path");
// });
// app.use((req, res) => {
//     res.send("this path does not exist");
// });

// path parameters

app.get("/", (req, res) => {
    res.send("Hello, i am root path");
});
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("hello i am root");
})


