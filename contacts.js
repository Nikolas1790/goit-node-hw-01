const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, './db/contacts.json')
const {nanoid} =require("nanoid")

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
  async function addContact(data) {
    const contacts = await listContacts();
    const newContact = {
      id:nanoid(),
      ...data,
    }
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newContact
  }
  async function updateContact(contactId, data) {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)

    if (index === -1) return null

    contacts[index] = {contactId, ...data}
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return contacts[index] 
   
  }
  
  async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId)

    if (index === -1) return null
    
    const [result] = contacts.splice(index, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return result || null
   
  }
module.exports ={
  listContacts,
  getContactById,
  addContact,
  updateContact,
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
