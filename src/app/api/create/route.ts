import { NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    // Parse the request body
    const body = await request.json();

    // Destructure the relevant fields from the request body
    const { title, subtitle, author, date, content } = body;

    // Create a new post object
    const post = {
      title,
      subtitle,
      author,
      date,
      content,
    };

    // Create the Markdown content
    const mdContent = `---
title: "${title}"
subtitle: "${subtitle}"
author: "${author}"
date: "${date}"
---
Autor: ${author}
\n\n
\n\n
Content: ${content}
`;

    // Define the path for the new .md file
    const filePath = path.join(process.cwd(), 'src', 'posts', `${title.replace(/ /g, '_')}.md`);

    // Write the Markdown content to a new .md file
    fs.writeFileSync(filePath, mdContent);

    // Respond with a success message
    return NextResponse.json({ success: true, post: post }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
};
