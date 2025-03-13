import express from "express";

const app = express();
app.use(express.json());

const books = [
    { id: 1, name: "The Lord of the Rings", genre: "Fantasy" },
    { id: 2, name: "To Kill a Mockingbird", genre: "Classic" }
];

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.post("/books", (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

export default app;