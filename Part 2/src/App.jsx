// App.jsx - stan zostaje tutaj
const App = () => {
  // ... stan: persons, newName, newNumber, filter
  // ... event handlery

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={filter} onChange={handleFilterChange} />
      
      <h3>Add a new</h3>
      <PersonForm 
        onSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      
      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  )
}
