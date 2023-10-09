// Importiere die benötigten Module
import { NextRequest, NextResponse } from "next/server"
import AWS from 'aws-sdk'

// Konfiguriere die AWS-Region
AWS.config.update({ region: 'eu-central-1' })

// Erstelle eine neue S3-Instanz
const s3 = new AWS.S3()

// Definiere die API-Route für POST-Anfragen
export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Parse den Request-Body als JSON
    const body = await request.json()

    // Zerlege den Body in seine Bestandteile
    const { title, subtitle, author, date, content } = body

    // Erstelle den Markdown-Inhalt für den Post
    const mdContent = `---
title: "${title}"
subtitle: "${subtitle}"
author: "${author}"
date: "${date}"
---
${content}
`

    // Definiere die Parameter für den S3-PutObject-Aufruf
    const params = {
      Bucket: 'next-blog-devrico003', // Dein S3-Bucket-Name
      Key: `${title.replace(/ /g, '_')}.md`, // Der Dateiname im S3-Bucket
      Body: mdContent,
      ContentType: 'text/markdown'
    }

    // Speichere die Datei im S3-Bucket
    s3.putObject(params, function(err, data) {
      if (err) {
        // Logge den Fehler und sende eine Fehlerantwort
        console.log(err)
        return NextResponse.error()
      } else {
        // Sende eine Erfolgsantwort mit dem erstellten Post
        return NextResponse.json({ success: true, post: body }, { status: 200 })
      }
    })

  } catch (error) {
    // Logge den Fehler und sende eine Fehlerantwort
    console.log(error)
    return NextResponse.error()
  }
}
