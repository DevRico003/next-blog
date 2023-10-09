// Importiere den Link-Component von Next.js, um clientseitige Navigation zu ermöglichen
import Link from "next/link"

// Importiere die PostMetadata-Typdefinition, um die Props-Typen zu spezifizieren
import { PostMetadata } from "./PostMetadata"

// Definiere die PostPreview-Komponente, die PostMetadata als Props erwartet
export default function PostPreview(props: PostMetadata) {
  return (
    // Ein Container für die Post-Vorschau mit einigen Tailwind CSS-Klassen
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">

      {/* Zeigt den Autor des Posts an */}
      <p className="text-sm text-slate-400">Autor: {props.author}</p>

      {/* Zeigt das Datum des Posts an */}
      <p className="text-sm text-slate-400">{props.date}</p>

      {/* Ein Link, der zur vollständigen Post-Seite führt */}
      {/* Der Link verwendet den "slug" des Posts, um die URL zu generieren */}
      <Link href={`/posts/${props.slug}`}>
        {/* Der Titel des Posts, der auch als Link dient */}
        <h2 className="text-violet-600 hover:underline mb-4">{props.title}</h2>
      </Link>

      {/* Zeigt den Untertitel des Posts an */}
      <p className="text-slate-700">{props.subtitle}</p>
    </div>
  )
}
