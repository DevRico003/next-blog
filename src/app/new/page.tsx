// "use client" wird verwendet, um sicherzustellen, dass dieser Code nur auf dem Client ausgeführt wird
"use client"

// Importieren der benötigten Module und Funktionen
import { useState } from 'react'
import axios from 'axios'

// Hauptkomponente für das Erstellen eines neuen Posts
export default function NewPost() {
  // Verwenden von useState, um den Zustand für verschiedene Felder zu verwalten
  const [title, setTitle] = useState('')
  const [subtitle, setSubtitle] = useState('')
  const [author, setAuthor] = useState('')
  const [date, setDate] = useState('')
  const [content, setContent] = useState('')

  // Funktion, die beim Absenden des Formulars aufgerufen wird
  const handleSubmit = async (e: React.FormEvent) => {

    // Verhindert das Standardverhalten des Formulars
    e.preventDefault()

    try {
      // Sendet die Formulardaten an die API-Route '/api/create'
      const response = await axios.post('/api/create', {
        title,
        subtitle,
        author,
        date,
        content
      })

      // Überprüft den Status der Antwort
      if (response.status === 200) {
        alert('Post erfolgreich erstellt')
      }
    } catch (error) {
      alert('Beim Erstellen des Posts ist ein Fehler aufgetreten')
    }
  }

  // JSX für die Formularseite
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold mb-4">Neuen Post erstellen</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Abschnitt für den Titel */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg font-medium">Titel</label>
          <input
            type="text"
            id="title"
            placeholder="Titel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {/* Abschnitt für den Untertitel */}
        <div className="flex flex-col">
          <label htmlFor="subtitle" className="text-lg font-medium">Untertitel</label>
          <input
            type="text"
            id="subtitle"
            placeholder="Untertitel"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {/* Abschnitt für den Autor */}
        <div className="flex flex-col">
          <label htmlFor="author" className="text-lg font-medium">Autor</label>
          <input
            type="text"
            id="author"
            placeholder="Autor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {/* Abschnitt für das Datum */}
        <div className="flex flex-col">
          <label htmlFor="date" className="text-lg font-medium">Datum</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {/* Abschnitt für den Inhalt */}
        <div className="flex flex-col">
          <label htmlFor="content" className="text-lg font-medium">Inhalt</label>
          <textarea
            id="content"
            placeholder="Inhalt"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="p-2 border rounded h-32"
          ></textarea>
        </div>
        {/* Abschnitt für den Absende-Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Post erstellen
        </button>
      </form>
    </div>
  )
}
