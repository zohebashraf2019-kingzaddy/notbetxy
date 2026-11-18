import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-6 text-6xl md:text-8xl">Lost in the edit.</h1>
      <p className="mt-6 max-w-md text-beige">This page doesn&apos;t exist — but the good stuff does.</p>
      <Link href="/" className="btn-solid mt-10">Back to NOTBETXY</Link>
    </main>
  );
}
