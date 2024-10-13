import ReactDOM from 'react-dom/client'

import App from './App'

const notes = [
  {
    id: 1,
    content: 'When it rains you cannot stain decks',
    important: true
  },
  {
    id: 2,
    content: "When it's sunny you can stain decks",
    important: true
  },
  {
    id: 3,
    content: 'All our data comes from the most recent weather report',
    important: false
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)
