// Boilerplate used for YouTube
import express from 'express'
const app = express()
app.listen(80)
app.get('/', (req, res) => res.json('test'))
