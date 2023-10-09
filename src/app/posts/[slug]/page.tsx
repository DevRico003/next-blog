// Importieren der benötigten Module
import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetadata"

// Funktion, um den Inhalt eines Posts anhand seines "slug" (eindeutiger Bezeichner) zu holen
const getPostContent = (slug: string) => {
  // Ordner, in dem die Markdown-Dateien gespeichert sind
  const folder = "src/posts/"
  // Vollständiger Pfad zur Markdown-Datei
  const file = `${folder}${slug}.md`
  // Lesen der Dateiinhalte
  const content = fs.readFileSync(file, "utf8")
  // Verwenden von "gray-matter", um Frontmatter und Inhalt zu trennen
  const matterResult = matter(content)
  // Rückgabe des Ergebnisses
  return matterResult
}

// Funktion, um statische Parameter für die Seiten zu generieren
export const generateStaticParams = async () => {
  // Holen der Metadaten aller Posts
  const posts = getPostMetadata()
  // Erstellen eines Arrays von "slugs" für die statische Generierung
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Hauptkomponente für die Anzeige eines einzelnen Posts
export default function PostPage(props: any) {
  // Extrahieren des "slug" aus den übergebenen Props
  const slug = props.params.slug
  // Holen des Inhalts und der Metadaten des Posts
  const post = getPostContent(slug)

  // JSX für die Seite
  return (
    <div>
      <div className="my-12 text-center">
        {/* Anzeigen des Titels */}
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        {/* Anzeigen des Datums */}
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      {/* Anzeigen des Inhalts des Posts */}
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}
