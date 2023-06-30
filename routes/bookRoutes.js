const express = require("express");
const bookControllers = require("../controllers/bookControllers");
const router = express.Router();

// @route GET && POST - /books/
router.route("/").get(bookControllers.getAllBooks);

router.route("/").post(bookControllers.createNewbook);


router.route("/:id").get(bookControllers.getbookById);

module.exports = router;
