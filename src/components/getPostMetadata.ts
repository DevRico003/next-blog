import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
  // Ändern Sie den relativen Pfad in einen absoluten Pfad
  const folder = path.join(process.cwd(), 'src/posts');
  
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    // Aktualisieren Sie den Pfad, um den absoluten Pfad zu verwenden
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}
