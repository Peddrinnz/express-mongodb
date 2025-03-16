import express from "express";
import connect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connect();

const app = express();
routes(app);

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