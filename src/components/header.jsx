export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-200 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        <a href="#home" className="text-xl font-bold text-indigo-600 tracking-tight shrink-0">MyPortfolio</a>
        <nav className="flex items-center overflow-x-auto no-scrollbar py-1">
          <ul className="flex space-x-2 md:space-x-3 text-sm font-medium whitespace-nowrap">
            <li>
              <a href="#home"className="inline-block px-4 py-2 bg-slate-100 text-slate-900 rounded-full hover:bg-slate-200 transition">Home</a>
            </li>
            <li>
                <a href="#about"className="inline-block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition">About</a>
            </li>
            <li>
              <a href="#projects"className="inline-block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition">Projects</a>
            </li>
            <li>
              <a href="#skills"className="inline-block px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-full transition">Skills</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
