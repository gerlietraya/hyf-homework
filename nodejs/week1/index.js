const ContactList = require("./contactList.js");
const my_contact_list = new ContactList();

my_contact_list.add({
    name: "Marco",
    phone:42838188
});

my_contact_list.add({
    name: "Marca",
    phone:42838188
});

my_contact_list.add({
    name: "Marce",
    phone:42838188
});
my_contact_list.remove('Marce');
console.log(my_contact_list.getList());
my_contact_list.searchBy('name','o');
// console.log(my_contact_list.getList())