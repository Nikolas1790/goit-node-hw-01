const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, './db/contacts.json')

const listContacts = async () => {
      const data = await fs.readFile(contactsPath)
    console.log(data)
   return JSON.parse(data) 
}  
  async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId)
    return result || null
  }
  function addContact(name, email, phone) {
    const contacts = await listContacts();
    // ...твой код. Возвращает объект добавленного контакта. 
  }
  function removeContact(contactId) {
    // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
  }
  

module.exports ={
  listContacts,
  getContactById,
  addContact,
  removeContact
}








  // const fs = require('fs/promises')
// const path = require('path')

// const contactsPath = path.join(__dirname, 'contacts.json')

// const a = require('./db/contacts.json')
// console.log(a)

// const getAll = async() => {
//     const data = await fs.readFile(contactsPath)
//     console.log(data)
//    return JSON.parse(data) 
// }

// const writeFile = async() => {
    
// }

// module.exports ={
//     getAll,
//     writeFile
// }
