const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, 'contacts.json')

// const a = require('./db/contacts.json')
// console.log(a)

const getAll = async() => {
    const data = await fs.readFile(contactsPath)
    console.log(data)
   return JSON.parse(data) 
}

const writeFile = async() => {
    
}

module.exports ={
    getAll,
    writeFile
}