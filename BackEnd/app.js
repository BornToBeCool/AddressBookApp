const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");

let CONTACTS = require("./db.json");

// takes as a parameter the CONTACTS object and overwrites the JSON file
function writeToFile(contacts) {
  fs.writeFile("./db.json", JSON.stringify(contacts), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

app.use(bodyParser.json());
app.use(cors());

// GET API that responseses the all the contacts
app.get("/", (req, res) => {
  res.send(CONTACTS);
});

// POST API that adds a new contact 
app.post("/register", (req, res) => {
  const contact = req.body;
  const Id = uuidv4();
  const contactId = { ...contact, id: Id };
  CONTACTS.push(contactId);
  res.send(`User with the name ${contact.first_name} added!`);
  writeToFile(CONTACTS)
});

// PATCH API that update a specific contact by id
app.patch("/:id", (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, phone, email } = req.body;

  const contact = CONTACTS.find((contact) => contact.id == id);

  if (first_name) contact.first_name = first_name;
  if (last_name) contact.last_name = last_name;
  if (phone) contact.phone = phone;
  if (email) contact.email = email;
  if (id) contact.id = id;
  writeToFile(CONTACTS)
  res.send(`User with the id ${contact.id} has been changed`);
});


// GET API that finds a specific contact by id
app.get("/:id", (req, res) => {
  const id = req.params.id;
  const foundContact = CONTACTS.find((contact) => contact.id == id);
  res.send(foundContact);
});

// DELETE API that deletes a contact by id
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  CONTACTS = CONTACTS.filter((contact) => contact.id != id);
  writeToFile(CONTACTS)
  res.send(`User deleted`);
});

app.listen(3000, () => console.log("Server has been started on port 3000..."));
