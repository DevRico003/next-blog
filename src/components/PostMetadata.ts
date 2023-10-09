// Wir definieren eine Schnittstelle namens "PostMetadata". 
// Schnittstellen in TypeScript sind eine Möglichkeit, die Form eines Objekts zu beschreiben.
export interface PostMetadata {
  // Der Titel des Blogposts als String. Zum Beispiel: "Mein erster Blogpost"
  title: string
  
  // Das Datum des Blogposts als String. Zum Beispiel: "2023-10-09"
  date: string
  
  
  // Der Untertitel des Blogposts als String. Zum Beispiel: "Ein Einblick in mein Leben"
  subtitle: string

  // Das Datum des Blogposts als String. Zum Beispiel: "2023-10-09"
  author: string
  
  // Der Slug ist eine URL-freundliche Version des Titels. Zum Beispiel: "mein-erster-blogpost"
  slug: string
}
