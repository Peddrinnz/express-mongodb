import express from "express";
import AuthorController from "../controllers/authorController.js";

const router = express.Router();

router.get("/authors", AuthorController.listAuthors);
router.get("/authors/:id", AuthorController.listAuthorForId);
router.post("/authors", AuthorController.createAuthor);
router.put("/authors/:id", AuthorController.updateAuthor);
router.delete("/authors/:id", AuthorController.deleteAuthor);

export default router;