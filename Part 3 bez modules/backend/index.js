require('dotenv').config() // To musi być na samej górze!
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person') // Importujemy model

const app = express()

app.use(express.static('dist'))
app.use(express.json()) // Ważne, żeby czytać dane z POST
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// 1. Pobieranie wszystkich osób
app.get('/api/persons', (request, response) => {
  Person.find({}).then(people => {
    response.json(people)
  })
})

// 2. Pobieranie jednej osoby po ID
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({ error: 'malformatted id' })
    })
})

// 3. Dodawanie nowej osoby
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ error: 'name or number missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

// 4. Usuwanie osoby
app.delete('/api/persons/:id', (request, response) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

// 5. Info o bazie
app.get('/info', (request, response) => {
  Person.countDocuments({}).then(count => {
    response.send(
      `<p>Phonebook has info for ${count} people</p>
       <p>${new Date()}</p>`
    )
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})