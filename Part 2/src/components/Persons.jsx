const Persons = ({ persons }) => (
    <div>
      {persons.map(person => 
        <Person key={person.id} person={person} />
      )}
    </div>
  )
  
  const Person = ({ person }) => (
    <p>{person.name} {person.number}</p>
  )
  