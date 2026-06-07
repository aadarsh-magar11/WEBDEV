const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {   // get is used to retrieve data
  // res.send('about')
  res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/users", (req, res) => {    // post is used to send data
    res.send("User created");
});

app.put("/users", (req, res) => {    // used to update an entire resource
    res.send("User updated");
});

app.delete("/users", (req, res) => {    // used to delete data
    res.send("User deleted");
});

app.get("/:id", (req, res) => {
    res.send("Dynamic Route");
});

app.get(     //middleware
    "/profile",
    (req, res, next) => {
        console.log("Middleware 1");
        next();
    },
    (req, res) => {
        res.send("Profile Page");
    }
);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})