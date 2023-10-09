import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { PostMetadata } from "../components/PostMetadata"

export default function getPostMetadata() {
  // Hier machen wir den relativen Pfad zu einem absoluten Pfad.
  // 'process.cwd()' gibt den aktuellen Arbeitsverzeichnispfad zurück.
  const folder = path.join(process.cwd(), 'src/posts')
  
  // Liest alle Dateinamen im Ordner.
  const files = fs.readdirSync(folder)
  
  // Filtert nur die Markdown-Dateien raus.
  const markdownPosts = files.filter(file => file.endsWith(".md"))

  // Jetzt gehen wir durch jede Markdown-Datei und holen die Metadaten.
  const posts = markdownPosts.map(fileName => {
    // Aktualisiert den Pfad, damit er absolut ist.
    const filePath = path.join(folder, fileName)
    
    // Liest den Inhalt der Datei als String.
    const fileContents = fs.readFileSync(filePath, "utf8")
    
    // 'matter()' zerlegt den Markdown-String in Metadaten und Inhalt.
    const matterResult = matter(fileContents)
    
    // Hier packen wir die Metadaten in ein Objekt und geben es zurück.
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      author: matterResult.data.author,
      slug: fileName.replace(".md", ""),
    }
  })

  // Zum Schluss geben wir alle Post-Metadaten zurück.
  return posts
}
