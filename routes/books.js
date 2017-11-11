var express = require('express');
var router = express.Router();
var databaseConnection = require("../database_connection");


/* GET users listing. */
router.get("/", function(request, response, next) {
    databaseConnection("book").select().then(function(books){
        response.render("list_books", {books: books});
    });
});

router.get("/new", function(request, response, next)  {
    response.render("add_book");
});
module.exports = router;
