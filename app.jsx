import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Rain or Stain</h1>
      <button>
      Determine if you Can Stain
    </button>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}


export default App
