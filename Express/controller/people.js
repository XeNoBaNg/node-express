const express = require('express')
const router = express.Router()
let {people} = require('../data')

const person = (req,res) => {
    res.status(200).json({ success: true, data: people })
}

const createPerson = (req,res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false, msg:'plz provide name value'})
    }
    const newPerson = { id: people.length + 1, name: name }

    people.push(newPerson)
    res.status(201).json({success:true, data: [...people]})
}

const updatePerson = (req,res) => {
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person) => person.id === Number(id))
    if(!person) {
        return res.status(400).json({success:false, msg:`person with id ${id} doesnt exist`})
    }

    person.name = name

    res.status(200).json({success: true, data: [...people]})
}

const deletePerson = (req,res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person) {
        return res.status(400).json({success:false, msg:`person with id ${req.params.id} doesnt exist`})
    }

    people = people.filter((person) => person.id !== Number(req.params.id))

    res.status(200).json({success: true, data: [...people]})
}

module.exports = {
    person,
    createPerson,
    updatePerson,
    deletePerson
}