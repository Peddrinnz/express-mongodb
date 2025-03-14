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

app.get("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find((b) => b.id === id);
    if (book) {
        res.status(200).json(book);
    } else {
        res.status(404).send("Book not found");
    }
});

app.post("/books", (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === id);

    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...req.body };
        res.status(200).json(books[bookIndex]);
    } else {
        res.status(404).send("Book not found");
    }
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((b) => b.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(200).send("Book deleted");
    } else {
        res.status(404).send("Book not found");
    }
});

export default app;