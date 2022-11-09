import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-700 text-sm pt-5">
      <hr className="mx-5"></hr>
      <nav className="flex p-6">
        <div className="flex items-center flex-no-shring mr-6">
          <span className="tracking-tight">Systemische Beratung Freund</span>
        </div>
        <div className="ml-auto"></div>
        <Link href="/impressum" className="mr-3">
          Impressum
        </Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </nav>
    </footer>
  );
}
