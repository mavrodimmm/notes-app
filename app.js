const notes = require('./notes.js')
const yrgs = require('yargs')
const chlk = require('chalk')
const fs = require('fs')


yrgs.version('1.1.0')

//Create add command

yrgs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yrgs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type:  'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yrgs.command({
    command: 'list',
    describe: 'listing note',
    handler(){
        notes.listNotes()
    }
})

yrgs.command({
    command: 'read',
    describe: 'readinng note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yrgs.parse()
