import express from "express";
import bodyParser from "body-parser";
import ContactList from "./contactList"
const app = express()
const my_contact_list = new ContactList();
my_contact_list.add({
  name: "marco",
  phone: 42838188
})
my_contact_list.add({
  name: "frank",
  phone: 42838199
})


app.use()(express.static(__dirname + '/public'))
app.use(bodyParser.jspn());


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send(my_contact_list)
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})