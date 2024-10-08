var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var app = express();

var db;

app.use(express.json());

app.get('/getBooks', function (req, res) {
  // Gets all books in the database and returns them
  db.collection('books').find({deleted: false}).toArray().then(response => {
    res.send(response);
  }).catch(err => {
    res.send({status: 'error', message: "There was an error getting the books"});
  })
})

app.post('/addBook', function (req, res) {
  // Adds a book to the database
  db.collection('books').insertOne(req.body.book).then(response => {
    var newBook = req.body.book;
    newBook._id = response.insertedId;
    res.send(newBook);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error adding the book" });
  })

})

app.post('/deleteBook', function (req, res) {
  // Changes a book's deleted property to true
  db.collection('books').updateOne({ _id: new ObjectId(req.body._id) }, { $set: { deleted: true } }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error deleting the book" });
  })
})

app.post('/editBook', function (req, res) {
  // Replaces a book
  db.collection('books').replaceOne({_id: new ObjectId(req.body._id)}, req.body.book).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error updating the book" });
  })
})

app.post('/completedBook', function (req, res) {
  // Changes a book's completed property to true
  db.collection('books').updateOne({_id: new ObjectId(req.body._id)}, {$set: {completed: true, wishList: false}}).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error updating the book" });
  })
})

app.post('/addToWishList', function (req, res) {
  // Changes a book's wishList property to true
  db.collection('books').updateOne({ _id: new ObjectId(req.body._id) }, { $set: { completed: false, wishList: true} }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error updating the book" });
  })
})

app.post('/addToShelf', function (req, res) {
  // Changes a book's completed and wishList properties to false
  db.collection('books').updateOne({ _id: new ObjectId(req.body._id) }, { $set: { completed: false, wishList: false} }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error updating the book" });
  })
})

app.post('/updateRating', function (req, res) {
  // Changes a books rating property
  db.collection('books').updateOne({ _id: new ObjectId(req.body._id) }, { $set: { rating: req.body.rating } }).then(response => {
    res.send(response);
  }).catch(err => {
    res.send({ status: 'error', message: "There was an error updating the book" });
  })
})

app.listen(8080, function() {
  const client = new MongoClient('mongodb://127.0.0.1:27017');

  client.connect().then(connection => {
    db = connection.db('booksDB');
  }).catch(err => {
    throw err;
  });
});