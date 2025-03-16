import Book from "../models/book.js";
import { Author } from "../models/author.js";

class BookController {
    static async listBooks(req, res) {
        try {
            const listBooks = await Book.find({}).populate("author");
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async listBookForId(req, res) {
        try {
            const id = req.params.id;
            const findBook = await Book.findById(id);
            res.status(200).json(findBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async createBook(req, res) {
        const newBook = req.body;
        try {
            const findAuthor = await Author.findById(newBook.author);
            
            if (!findAuthor) {
                return res.status(400).json({ error: "Author not found" });
            }
    
            const bookComplete = { ...newBook, author: findAuthor._id };
            const createdBook = await Book.create(bookComplete);
    
            res.status(201).json({ message: "Book created", createdBook });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await Book.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Book updated"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    
    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await Book.findByIdAndDelete(id);
            res.status(200).json({message: "Book deleted"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

export default BookController;