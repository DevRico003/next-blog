// Importieren der erforderlichen Module
import { NextRequest, NextResponse } from "next/server"
import fs from 'fs'
import path from 'path'

// Definieren der POST-Methode für die API-Route
export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Parsen des Anfragekörpers in ein JSON-Objekt
    const body = await request.json()

    // Extrahieren der relevanten Felder aus dem Anfragekörper
    const { title, subtitle, author, date, content } = body

    // Erstellen eines neuen Post-Objekts
    const post = {
      title,
      subtitle,
      author,
      date,
      content,
    }

    // Erstellen des Markdown-Inhalts für den neuen Post
    const mdContent = `---
title: "${title}"
subtitle: "${subtitle}"
author: "${author}"
date: "${date}"
---
${content}
`

    // Definieren des Pfads für die neue .md-Datei
    // Der Titel wird so formatiert, dass Leerzeichen durch Unterstriche ersetzt werden
    const filePath = path.join(process.cwd(), 'src', 'posts', `${title.replace(/ /g, '_')}.md`)

    // Schreiben des Markdown-Inhalts in eine neue .md-Datei
    fs.writeFileSync(filePath, mdContent)

    // Senden einer Erfolgsmeldung als Antwort
    return NextResponse.json({ success: true, post: post }, { status: 200 })
  } catch (error) {
    // Protokollieren des Fehlers, falls einer auftritt
    console.log(error)
    // Senden einer Fehlermeldung als Antwort
    return NextResponse.error()
  }
}
