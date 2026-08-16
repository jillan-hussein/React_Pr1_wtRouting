export default function Header({ setPage }) {
  return (
    <header>
      <div>
        <h1 className="p-4 text-center text-2xl text-purple-100 font-bold bg-purple-700">
          Computer Information | React Project
        </h1>
      </div>

      <nav className="flex justify-center gap-10 p-3 bg-green-600 text-purple-700 font-medium shadow-2xl shadow-purple-700">
        <a
          href="#"
          onClick={() => setPage("Home")}
          className="inline-block hover:text-purple-200 hover:scale-105 transition-all"
        >
          Home
        </a>
        <a
          href="#"
          onClick={() => setPage("Computers")}
          className="inline-block hover:text-purple-200 hover:scale-105 transition-all"
        >
          Computers
        </a>
        <a
          href="#"
          onClick={() => setPage("About us")}
          className="inline-block hover:text-purple-200 hover:scale-105 transition-all"
        >
          About us
        </a>
      </nav>
    </header>
  );
}
