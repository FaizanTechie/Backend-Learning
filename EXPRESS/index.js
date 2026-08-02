const express = require("express"); // express is basically a function and it returns a value when we execute it.
const app = express(); // app is a variable and its basically an object.

let port = 8080;

// 1st propert listening to incoming requests.
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

/////////////////////////////////////////////////////

// app.use((req, res) => {
//         // console.log(req);
//     console.log("request received");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

//////////////////////////////////////////////////////

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

// path parameters Below

// app.get("/", (req, res) => {
//     res.send("Hello, i am root path");
// });

//////////////////////////////////////////////
// app.get("/:username/:id", (req, res) => {
//     console.log(req.params);
//     res.send("hello i am root");
// })

///////////////////////////////////////////// Destructuring Example
// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     res.send(`welcome to the page of @${username}`);
// })

/////////////////////////////////////////////

// Query Strings Below

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// })

////////////////////////////////////////////////

// app.get("/search", (req, res) => {
//     let {q} = req.query;
//     if(!q) {
//         res.send("<h1>nothing searched</h1>")
//     }
//     res.send(`<h1>search results for query: ${q}</h1>`);
// })

// Custom Middleware

app.use((req, res, next) => {
    console.log("Time:", new Date().toLocaleString());
    console.log(`${req.method} ${req.url}`);
    next(); // Pass control to the next middleware or route
});

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1>");
});