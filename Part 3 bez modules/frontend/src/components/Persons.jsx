const Persons = ({persons, newFilter, setPersons, deletePerson}) =>{
    if(newFilter.length < 1){
      return(
      persons.map(person =>
        <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>
      )
    )
    }else{
      return(
        persons.map(person => person.name.toLowerCase().includes(newFilter.toLowerCase()) ?
        <p key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person)}>delete</button></p>: null
      )
      )
    }
  }
  export default Persons