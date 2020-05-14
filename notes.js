const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your Notes ..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title )
    debugger 
    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('New Note Added'))
    }else {
        console.log(chalk.red('Note title taken!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.yellow("Your Notes:"))
    notes.forEach ((note) =>{
        console.log(chalk.yellow(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const readN = notes.find( (note) => note.title === title)

    if (!readN){
        console.log(chalk.red("No Note Found"))
    } else {
        console.log(chalk.inverse.yellow(readN.title))
        console.log(chalk.yellow(readN.body))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    saveNotes(notesToKeep)
    if (notes.length === notesToKeep.length){
        console.log(chalk.red('No Note Found'))
    } else {
        console.log(chalk.green('Note Deleted'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return[]
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}