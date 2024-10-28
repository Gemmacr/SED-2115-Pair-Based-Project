import Note from './components/Note'
 
const App = ({ notes }) => {
  const handleButtonClick = () => {
    window.open("https://openweathermap.org/city/6094817", "_blank");
  }
 
  return (
<div>
<h1>Rain or Stain</h1>
<button onClick={handleButtonClick}>
        Weather App
</button>
<ul>
        {notes.map(note => 
<Note key={note.id} note={note} />
        )}
        <button>Determine if You can Stain</button>
</ul>
</div>
  )
}
 
export default App
