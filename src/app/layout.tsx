import Image from "next/image";
import Link from "next/link";
import "src/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md container mx-auto flex justify-between">
        <Link href="/">
          <h1 className="text-2xl text-white font-bold">Blog</h1>
        </Link>
        <div className="space-x-4">
            <Link href="/new" className="text-2xl text-white font-bold mt-4">
              Create Post
            </Link>
          </div>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Enrico Carteciano</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">

          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
