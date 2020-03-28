const fs = require('fs')
const chalk = require("chalk")

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }

}

const removeNote = (title) => {
    const notes = loadNotes();

    const remainingNotes = notes.filter(note => note.title !== title)

    if (notes.length === remainingNotes.length) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse("Note removed!"))
    }
}

const listNotes = () => {
    const notes = loadNotes();

    console.log(chalk.green("Your notes..."))
    notes.forEach((note) => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find(note => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (err) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}