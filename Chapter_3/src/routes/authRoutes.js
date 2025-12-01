import express, { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'


const route = express.Router()

route.post('/register', (req, res) => {})

export default route