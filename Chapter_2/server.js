const express = require('express')
const app = express()
const PORT = 4000



let data = [
    "Nattapat"
]

//Middleware
app.use(express.json())


//End point - HTTP VERBS(method) && Routes(paths)

//Type - 1 Website endpoints (ไว้แสดงให้ User เห็น) 
app.get('/',(req, res) => {
    console.log('Home Page', req.method)
    res.send('<h1>This is a Home Page</h1>')
})


app.get('/dashboard',(req, res) => {
    console.log('/dash board endpoint test',req.method)
    res.send('You are in dashboard endpoint.')
})

app.get('/displaydata',(req, res) => {
    res.send(`
    <body>
    <p>${JSON.stringify(data)}</p>
    </body>
        `)
})


//Type - 2 API endpoints (ไม่แสดงให้ User เห็น)
//CRUD-method => Create-post Read-get Update-put Delete-delete

app.get('/api/data',(req, res) => {
    res.send(data)
})

app.post('/api/data',(req, res) => {
    const newEntrydata = req.body
    console.log(newEntrydata)
    data.push(newEntrydata.name)
    res.sendStatus(201)
})

app.delete('/api/data',(req, res) => {
    data.pop()
    console.log('Lastest Data has been deleted')
    res.sendStatus(203)
})


app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))