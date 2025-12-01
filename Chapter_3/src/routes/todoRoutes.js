import express from 'express'
import db from '../db.js'

const route = express.Router()

//Get all todos list for users
route.get('/', (req, res) => {

})

//Create new todo
route.post('/', (req, res) => {
    
})

//Update todo by id
route.put('/:id', (req, res) => {
    
})

//Delete todo by id
route.delete('/:id', (req, res) => {
    
})

export default route