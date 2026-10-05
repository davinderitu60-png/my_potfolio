import Header from "./header";

export default function Hero() {
  return (
    <>
    <Header/>
    
    <section id="home" className="min-h-[80vh] flex  justify-center px-4 max-w-6xl mx-auto py-12">
      <div className="w-full grid md:grid-cols-2 gap-12 items-end">
        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
              Hi, I'm <span className="text-red-400">David Nderitu</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md">
              A software developer creating clean,simple user interfaces.
            </p>
          </div>
          <div>
          </div>
        </div>

        <div className="flex justify-center md:justify-self-end">
          <div className="relative w-20 h-40 md:w-20 md:h-20 rounded-full overflow-hidden shadow-xl border-4 border-white bg-black-500">
            <img 
              src="/dp.png"alt="" className="w-full h-full object-cover object-center" />
          </div>
        </div>

      </div>
    </section>
    </>
    

  );
}
