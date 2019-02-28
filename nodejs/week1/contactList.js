// class ContactList {
	
//     constructor(name, number){
//         this.name = name;
//         this.number = number;
//     };
// class ContactList {
//     constructor() {
//         this._list = [];
//     }
//     /**
//      * 
//      * @param {name: String, phone: number} contact 
//      */
//     add(new_contact) {
//         this._list.push(contact);

//     remove(name) {
//         let index = null;
//         this._list.some((contact,i) =>{
//         index = i;
//         return ( contact.name === name)
//         })
//         this._list.splice(index, 1);
//     }  
//     }
//     getList() {
//         return this._list;
//     }
// }
class ContactList {
    /**
     * Simple Contact List class
     */
    constructor() {
      this._list = [];
    }
  
    isContactValid(new_contact) {
      // validate name
      if(new_contact.hasOwnProperty('name') && new_contact.hasOwnProperty('phone') ) {
          //if( new_contact.name === "" || typeof new_contact.name !== "string") {
              throw new Error('invalid name,try again')
             
          }
          if(new_contact.phone !== "number" || new_contact.phone.toString().length < 5) { 
          //if(new_contact.phone === "" || typeof new_contact.phone !=="number") {
            throw new Error('invalid phone number, try again')
          }

      
       else{
          throw new Error("The contact needs to have a name and a phone")
      }
      // phone and phone length
    }

    
  
    /**
     * Method for add a contact to the list
     * @param { name: String, phone: number} contact
     */
    add(new_contact) {
      try {
        
        
      } catch (error) {
        
      }
      if (this._list.length === 0) {
        this._list.push(new_contact);
      } else {
          for (let index = 0; index < this._list.length; index++) {
            const contact = this._list[index];
            if (contact.name === new_contact.name) {
              console.log(
                "A contact with the name " + new_contact.name + " already exists"
              );
              return;
            } else {
              this._list.push(new_contact);
              return;
            }
          }
      }
    }
  
    remove(name) {
      if (this._list.length === 0) {
        console.log("The list is empty");
      } else {
        const newContactsArray = this._list.filter( contact => {return contact.name !== name})
        this._list = newContactsArray
        // for (let index = 0; index < this._list.length; index++) {
        //   const contact = this._list[index];
        //   if (contact.name === name) {
        //     this._list.splice(index, 1);
        //     return;
          // } else {
          //   console.log("There is no contact with the name " + name);
          //}
        }
      }
    
  
    getList() {
      return this._list;
    };
    
    searchBy(key,value) {
      this._list.filter(contact=>contact[key] === value)
    }
  }
module.exports = ContactList;
