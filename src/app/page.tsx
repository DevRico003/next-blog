// Importieren der getPostMetadata-Funktion aus den Komponenten
import getPostMetadata from "../components/getPostMetadata"
// Importieren der PostPreview-Komponente aus den Komponenten
import PostPreview from "../components/PostPreview"

// Hauptkomponente für die Startseite
export default function HomePage() {
  // Abrufen der Metadaten für alle Blogposts
  const postMetadata = getPostMetadata()
  
  // Erstellen einer Liste von PostPreview-Komponenten, eine für jeden Blogpost
  // Wir verwenden die Spread-Operator (...post), um alle Eigenschaften des Post-Objekts als Props an PostPreview zu übergeben
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  // Rendern der PostPreview-Komponenten in einem Grid-Layout
  // Wir verwenden Tailwind CSS-Klassen für das Styling
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  )
}
