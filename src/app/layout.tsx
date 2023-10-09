// Importieren der benötigten Module und Komponenten
import Image from "next/image"
import Link from "next/link"
import "src/app/globals.css"

// Definieren der RootLayout-Komponente, die als Layout für die gesamte Anwendung dient
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Definieren des Header-Bereichs der Anwendung
  const header = (
    <header>
      {/* Container für den Header mit Styling */}
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md container mx-auto flex justify-between">
        {/* Link zur Startseite */}
        <Link href="/">
          <h1 className="text-2xl text-white font-bold">Blog</h1>
        </Link>
        {/* Container für zusätzliche Links im Header */}
        <div className="space-x-4">
          {/* Link zur Seite zum Erstellen eines neuen Posts */}
          <Link href="/new" className="text-2xl text-white font-bold mt-4">
            Create Post
          </Link>
        </div>
      </div>
    </header>
  )

  // Definieren des Footer-Bereichs der Anwendung
  const footer = (
    <footer>
      {/* Container für den Footer mit Styling */}
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        {/* Footer-Text */}
        <h3>Enrico Carteciano</h3>
      </div>
    </footer>
  )

  // Rückgabe der gesamten Layout-Komponente
  return (
    <html>
      <head />
      <body>
        {/* Hauptcontainer für die Anwendung */}
        <div className="mx-auto  max-w-2xl px-6">
          {/* Einbinden des Headers */}
          {header}
          {/* Einbinden der Kinderkomponenten (z.B. Seiteninhalte) */}
          {children}
          {/* Einbinden des Footers */}
          {footer}
        </div>
      </body>
    </html>
  )
}
