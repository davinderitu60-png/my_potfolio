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
        <div>
            <img 
              src="/dp.png"alt="" className="w-100 h-100 object-cover object-left" />
        </div>

      </div>
    </section>
    <div class="bg-white dark:bg-gray-800 ring shadow-xl ring-gray-900/5 h-77 w-105 bg-[url('./student.png')] bg-cover bg-full bg-center">
  <h3 class="text-gray-900 dark:text-white mt-2 text-base font-medium tracking-tight ">Learning Management System</h3>
  <p class="text-blue-500 dark:text-blue-400 mt-2 text-sm ">
   Welcome to my Education learning management system, which adds the student and updated student marks.
  </p>
</div>



    </>
    

  );
}
