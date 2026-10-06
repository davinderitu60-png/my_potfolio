import Header from "./header";

export default function Hero() {
  return (
    <>
    <div >
        <Header/>
    
        <section id="home" className=" flex justify-center  py-6 ">
        <div className="w-full grid md:grid-cols-2 items-center gap-8">
            <div className="space-y-6 text-center md:text-left">
            <div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
                Hi, I'm <span className="text-red-400">David Nderitu</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-md mt-4">
                A software developer creating clean, simple user interfaces.
                </p>
            </div>
            </div>
            <div>
            <img 
                src="/dp.png" 
                alt="David Nderitu" 
                className="w-full max-w-md h-auto object-cover object-left mx-auto md:mx-0" 
            />
            </div>
        </div>
        </section>
        <div >
        <div className="h-66 w-90">
            <img src="./student.png" alt="student.png " />
            <div>
                 <h3 class="text-black  text-base font-medium">Learning Management System</h3>
            <p class="text-blue-300 mt-6 text-sm ">
            Welcome to my Education learning management system, which adds the student and updated student marks.
            </p>
            </div>
           
        </div>
        </div>

    </div>
    </>
    

  );
}
