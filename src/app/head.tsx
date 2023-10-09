// Exportiere die Funktion "Head" als Standard-Export
export default function Head() {
  // Die Funktion gibt JSX zurück, das im Head-Bereich der HTML-Seite eingefügt wird
  return (
    // Verwende leere Tags (<> und </>), um mehrere Elemente ohne einen umschließenden Container zurückzugeben
    <>
      {/* Setze den Titel der Webseite auf "Blog" */}
      <title>Blog</title>
      
      {/* Füge ein Meta-Tag hinzu, um das Layout auf mobilen Geräten zu steuern */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
    </>
  )
}
